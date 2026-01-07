import React, { useEffect, useRef } from 'react'
import * as THREE from "three"
import { useThree, useFrame } from '@react-three/fiber'
import { useGLTF, useTexture, useAnimations } from '@react-three/drei'
import gsap from "gsap";
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Dog = () => {
    const groupRef = useRef();
    const model = useGLTF("/models/dog.drc.glb");
    
    // Shader Uniforms Ref
    const materialRefs = useRef({
        uMatcap1: { value: null },
        uMatcap2: { value: null },
        uProgress: { value: 1.0 }
    });

    // 1. Camera & Renderer Setup
    useThree(({ camera, gl }) => {
        camera.position.z = 0.55;
        gl.toneMapping = THREE.ReinhardToneMapping;
        gl.outputColorSpace = THREE.SRGBColorSpace;
    });

    // 2. Animations
    const { actions } = useAnimations(model.animations, model.scene);
    useEffect(() => {
        if (actions["Take 001"]) actions["Take 001"].play();
    }, [actions]);

    // 3. Textures Loading
    const textures = useTexture([
        "/dog_normals.jpg",
        "/branches_diffuse.jpeg",
        "/branches_normals.jpeg",
        "/matcap/mat-19.png", // mat1
        "/matcap/mat-2.png",   // mat2
        "/matcap/mat-8.png",
        "/matcap/mat-9.png",
        "/matcap/mat-12.png",
        "/matcap/mat-10.png",
        "/matcap/mat-13.png",
    ]);

    const [
        normalMap, branchMap, branchNormalMap, 
        mat19, mat2, mat8, mat9, mat12, mat10, mat13
    ] = textures.map(t => {
        t.colorSpace = THREE.SRGBColorSpace;
        t.flipY = false;
        return t;
    });

    // Initialize shader values
    materialRefs.current.uMatcap1.value = mat19;
    materialRefs.current.uMatcap2.value = mat2;

    // 4. Custom Shader Logic
    useEffect(() => {
        const dogMaterial = new THREE.MeshMatcapMaterial({
            normalMap: normalMap,
            matcap: mat2
        });

        const branchMaterial = new THREE.MeshMatcapMaterial({
            normalMap: branchNormalMap,
            map: branchMap
        });

        dogMaterial.onBeforeCompile = (shader) => {
            shader.uniforms.uMatcapTexture1 = materialRefs.current.uMatcap1;
            shader.uniforms.uMatcapTexture2 = materialRefs.current.uMatcap2;
            shader.uniforms.uProgress = materialRefs.current.uProgress;

            shader.fragmentShader = `
                uniform sampler2D uMatcapTexture1;
                uniform sampler2D uMatcapTexture2;
                uniform float uProgress;
            ` + shader.fragmentShader;

            shader.fragmentShader = shader.fragmentShader.replace(
                "vec4 matcapColor = texture2D( matcap, uv );",
                `
                vec4 matcapColor1 = texture2D( uMatcapTexture1, uv );
                vec4 matcapColor2 = texture2D( uMatcapTexture2, uv );
                float transitionFactor = 0.2;
                float progress = smoothstep(uProgress - transitionFactor, uProgress, (vViewPosition.x + vViewPosition.y) * 0.5 + 0.5);
                vec4 matcapColor = mix(matcapColor2, matcapColor1, progress);
                `
            );
        };

        model.scene.traverse((child) => {
            if (child.name.includes("DOG")) {
                child.material = dogMaterial;
            } else if (child.isMesh) {
                child.material = branchMaterial;
            }
        });
    }, [model, mat2, mat19, normalMap, branchMap, branchNormalMap]);

    // 5. FIXED ROTATION GSAP
    useGSAP(() => {
        if (!groupRef.current) return;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: "main",
                start: "top top",
                end: "bottom bottom",
                scrub: 1.5, // Smooth lag effect
            }
        });

        tl.to(groupRef.current.rotation, {
            y: `+=${Math.PI * 2}`, // পূর্ণ ৩৬০ ডিগ্রি রোটেশন (2 * PI)
            ease: "none"
        })
        .to(groupRef.current.position, {
            x: -0.2,
            z: -0.3,
            ease: "power1.inOut"
        }, 0); // Position change rotation এর সাথেই হবে

    }, []);

    // 6. Hover Matcap Transitions
    const transition = (newMat) => {
        materialRefs.current.uMatcap1.value = newMat;
        gsap.to(materialRefs.current.uProgress, {
            value: 0.0,
            duration: 0.3,
            onComplete: () => {
                materialRefs.current.uMatcap2.value = newMat;
                materialRefs.current.uProgress.value = 1.0;
            }
        });
    }

    useEffect(() => {
        const handleHover = (selector, mat) => {
            const el = document.querySelector(selector);
            if (el) el.addEventListener("mouseenter", () => transition(mat));
        };

        handleHover('.title[img-title="tomorrowland"]', mat19);
        handleHover('.title[img-title="navy-pier"]', mat8);
        handleHover('.title[img-title="msi-chicago"]', mat9);
        handleHover('.title[img-title="phone"]', mat12);
        handleHover('.title[img-title="kikk"]', mat10);
        handleHover('.title[img-title="kennedy"]', mat8);
        handleHover('.title[img-title="opera"]', mat13);

        const titles = document.querySelector(".titles");
        if (titles) titles.addEventListener("mouseleave", () => transition(mat2));

    }, [mat19, mat8, mat9, mat12, mat10, mat13, mat2]);

    return (
        <group ref={groupRef}>
            <primitive 
                object={model.scene} 
                position={[0.25, -0.55, 0]} 
                rotation={[0, Math.PI / 3.9, 0]} 
            />
            <directionalLight position={[0, 5, 5]} intensity={10} />
        </group>
    )
}

export default Dog;