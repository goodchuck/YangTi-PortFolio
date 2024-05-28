"use client";

import { LineHeightOutlined } from '@ant-design/icons';
import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { FBXLoader, GLTFLoader } from 'three/examples/jsm/Addons.js';
import { OrbitControls } from 'three/examples/jsm/Addons.js';
import { MMDLoader } from 'three/examples/jsm/Addons.js';
import { MMDAnimationHelper } from 'three/examples/jsm/Addons.js';
const ThreeScene = () => {
    const mountRef = useRef<HTMLDivElement>(null);
    const mixerRef = useRef<THREE.AnimationMixer | null>(null);
    const actionsRef = useRef<{ [key: string]: THREE.AnimationAction }>({});
    useEffect(() => {
        const mount = mountRef.current;
        if (!mount) return;
        let mountWidth = mount.clientWidth;
        let mountHeight = mount.clientHeight;
        console.log({ mountWidth, mountHeight })
        const scene = new THREE.Scene();
        scene.background = new THREE.Color(0xf0f0f0); // 밝은 회색

        const camera = new THREE.PerspectiveCamera(75, mountWidth / mountHeight, 0.1, 1000);
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(mountWidth, mountHeight);
        mount.appendChild(renderer.domElement);


        const clock = new THREE.Clock();
        const glbLoader = new GLTFLoader();
        let mixer: THREE.AnimationMixer;
        const helper = new MMDAnimationHelper();
        const fbxLoader = new FBXLoader();
        glbLoader.load(
            './threeJS/final-me.glb',
            (gltf) => {
                const model = gltf.scene;
                console.log({ gltf, model });
                // model.traverse((child) => {
                //     if (child.isMesh) {
                //         child.castShadow = false;
                //         child.receiveShadow = false;
                //     }
                // });
                scene.add(model);
                // AnimationMixer 설정
                mixer = new THREE.AnimationMixer(model);
                gltf.animations.forEach((clip) => {
                    mixer.clipAction(clip).play();
                });

                // // 모델의 본 구조 출력
                // model.traverse((child) => {
                //     if (child.isBone) {
                //         console.log('Bone:', child.name);
                //     }
                // });

                // const characterMesh = gltf.scene.children[0];
                // scene.add(characterMesh);

                // mixer = new THREE.AnimationMixer(characterMesh);
                // const actions = [];
                // actions[0] = mixer.clipAction(gltf.animations[0]);
                // actions[1] = mixer.clipAction(gltf.animations[1]);
                // actions[0].repetitions = 2;
                // actions[0].clampWhenFinished = true;
                // actions[0].play();
            },
            undefined,
            (error) => {
                console.error('An error Happend', error);
            }
        )

        // fbxLoader.load('./threeJS/fbx/OffensiveIdle.fbx', (object) => {
        //     scene.add(object);
        //     const mixer = new THREE.AnimationMixer(object);
        //     mixerRef.current = mixer;

        //     const loadAnimation = (url: string, name: string) => {
        //         fbxLoader.load(url, (anim) => {
        //             const clip = anim.animations[0];
        //             const action = mixer.clipAction(clip);
        //             actionsRef.current[name] = action;
        //         });
        //     };

        //     // 첫 번째 애니메이션 로드
        //     loadAnimation('./threeJS/fbx/LeftTurn90.fbx', 'animation1');

        //     // 두 번째 애니메이션 로드
        //     loadAnimation('./threeJS/fbx/LeftTurn90.fbx', 'animation2');

        //     // 추가 애니메이션 로드
        //     // loadAnimation('/path/to/your/third-animation.fbx', 'animation3');
        // },
        //     undefined,
        //     (error) => {
        //         console.error('An error happend', error)
        //     });


        fbxLoader.load(
            './threeJS/background/room2/isometric-room.fbx', // FBX 파일 경로
            (object) => {
                scene.add(object);
                object.scale.set(0.007, 0.007, 0.007);
                object.rotation.y = - Math.PI / 2
            },
            undefined,
            (error) => {
                console.error('An error happened', error);
            }
        );


        // const mmdLoader = new MMDLoader();
        // mmdLoader.loadWithAnimation(
        //     './threeJS/EVA/EVA_SUNSET.pmx', // PMX 파일 경로
        //     ['./threeJS/dance/test1/Facial.vmd', './threeJS/dance/test1/Motion.vmd'],
        //     (mmd) => {
        //         const mesh = mmd.mesh;
        //         const animation = mmd.animation;
        //         helper.add(mesh, {
        //             animation: animation,
        //             physics: false,
        //         });
        //         scene.add(mesh);


        //     },
        //     undefined,
        //     (error) => {
        //         console.error('An error happened', error);
        //     }
        // );

        const light = new THREE.HemisphereLight(0xffffff, 0x444444, 1);
        light.position.set(0, 5, 0);
        scene.add(light);


        // 땅 추가
        const groundGeometry = new THREE.PlaneGeometry(100, 100);
        const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x808080 });
        const ground = new THREE.Mesh(groundGeometry, groundMaterial);
        ground.rotation.x = -Math.PI / 2;
        ground.position.y = -0.5;
        scene.add(ground);

        // OrbitControls 추가
        // const controls = new OrbitControls(camera, renderer.domElement);
        // controls.enableDamping = true;
        // controls.dampingFactor = 0.25;
        // controls.screenSpacePanning = false;
        // controls.maxPolarAngle = Math.PI / 2;

        camera.position.set(0, 1.2, 1.5);
        // camera.position.z = 5;

        const animate = () => {
            requestAnimationFrame(animate);
            const delta = clock.getDelta();
            if (mixer) mixer.update(delta);
            // controls.update();
            helper.update(delta);
            renderer.render(scene, camera);
        }

        animate();

        const handleResize = () => {
            camera.aspect = mountWidth / mountHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountWidth, mountHeight);
            camera.aspect = mountWidth / mountHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(mountWidth, mountHeight)
        };

        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(mount);

        return () => {
            resizeObserver.unobserve(mount);
            mount.removeChild(renderer.domElement);
        }
    }, [])

    const playAnimation = (name: string) => {
        if (actionsRef.current[name]) {
            actionsRef.current[name].reset().play();
        }
    };

    return (
        <div style={{ position: 'relative', width: '100%', height: '100%' }}>
            <div ref={mountRef} style={{ width: '100%', height: '100%' }} />;
            <div style={{ position: 'absolute', top: 0, left: 0 }}>
                <button onClick={() => playAnimation('animation1')}>Play Animation 1</button>
                <button onClick={() => playAnimation('animation2')}>Play Animation 2</button>
            </div>

        </div>
    )

}

export default ThreeScene