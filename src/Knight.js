/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/Knight.glb')
  return (
    <group ref={group} {...props} dispose={null}>
            <group scale={[0.02, 0.02, 0.02]}>

      <mesh geometry={nodes.mesh_0.geometry} material={nodes.mesh_0.material} />
      </group>
    </group>
  )
}

useGLTF.preload('/Knight.glb')
