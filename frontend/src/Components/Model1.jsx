import { useEffect } from "react";
import { useAnimations, useGLTF } from '@react-three/drei';

const Model1 = () => {
    const { nodes, materials, animations, scene } = useGLTF('../../public/charizard.glb');
    const { actions, names } = useAnimations(animations);
    console.log(names);

    useEffect(() => {
        if (actions && names && names.length > 0) {
            const action = actions[names[0]];
            if (action) {
                action.bd_ev100_wait00fly.play();
            }
        }
    }, [actions]);

    return <primitive object={scene} />;
};

export default Model1;