/* eslint-disable */
import * as THREE from 'three'
import * as React from 'react'
import { useRef, useState } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import './App.css';
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Html, Loader, useGLTF } from "@react-three/drei";
import {default as PawnModel } from './Pawn'

import {default as RookModel } from './Rook'

import {default as BishopLModel } from './Bishop_L'

import {default as BishopRModel } from './Bishop_R'

/*
 <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box_1.geometry}
        material={materials["Butterfly Wing"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[0, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Box.geometry}
        material={materials["Diamond Dust"]}
        position={[0, 0.06, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={0}
      /> */

//useGLTF.preload("/Project Name.glb");


function BlackTile(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"black"} />
    </mesh>
  )
}
function WhiteTile(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  )
}
function BorderTileTop(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 0.5, 1]} />
      <meshStandardMaterial color={"brown"} />
    </mesh>
  )
}

function BorderTileSide(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[0.5, 1, 1]} />
      <meshStandardMaterial color={"brown"} />
    </mesh>
  )
}


function BorderTileFull(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"brown"} />
    </mesh>
  )
}

function Pawn(props: JSX.IntrinsicElements['mesh']) {
  // This reference will give us direct access to the THREE.Mesh object
  const ref = useRef<THREE.Mesh>(null!)
  // Hold state for hovered and clicked events
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  // Rotate mesh every frame, this is outside of React without overhead
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={"brown"} />
    </mesh>
  )
}
const resolveOtherPieces = (j:number,i:number,side:string)=>{
 const position:number[] = side == "black" ? [j-1.55 , i+0.2, -3.3]  :[j+1.55 , i-0.2, -3.3] 
 const rotation:number[] = side == "black" ? [0,0,0]  :  [0,0,Math.PI]

  switch (j){
    case 0:
    case 7:
      console.log(position)
      return <RookModel position = {position} rotation = {rotation}/>
    case 2:
    case 5:
      return <BishopRModel position = {position} rotation = {rotation}/>


  }
}
const resolveChessPirce = (i: number, j: number) => {
  switch (i) {
    case 1:
      return <PawnModel position={[j + 1.35, i - 0.2, -3.5]} rotation ={ [0,0,Math.PI]}/>
    case 6:
     return <PawnModel position={[j - 1.35, i + 0.2, -3.5] } />
    case 0:
      return resolveOtherPieces(j,i,"white")
    case 7:
      return resolveOtherPieces(j,i,"black")
  }
}
const resolveTileColor = (i: number, j: number) => {
  console.log("i", i % 2);
  console.log()
  if (i % 2 === 0) {
    if (j % 2 === 0) {
      return "white"
    }
    return "black"
  }


  if (j % 2 === 0) {
    return "black"
  }
  return "white"
}


const renderBox = (i: number, j: number) => {


  var tileColor = resolveTileColor(i, j);

  switch (tileColor) {
    case "brownTop":
      return <BorderTileTop position={[j, i, 0]} />

    case "brownSide": return <BorderTileSide position={[j, i, 0]} />
    case "brownFull": return <BorderTileFull position={[j, i, 0]} />
    case "black":
      return (<>
        <BlackTile position={[j, i, 0]} />
        {resolveChessPirce(i, j)}</>)
    default:
      return (<>
        <WhiteTile position={[j, i, 0]} />
        {resolveChessPirce(i, j)}
      </>)
  };



};


const renderMerged = () => {



};


const CameraController = () => {
  const { camera, gl } = useThree();
  React.useEffect(
    () => {
      const controls = new OrbitControls(camera, gl.domElement);

      controls.minDistance = 3;
      controls.maxDistance = 20;
      return () => {
        controls.dispose();
      };
    },
    [camera, gl]
  );
  return null;
};

function App() {
  return (
    <div className="App">
      <Canvas
        style={{ minHeight: "90vh" }}
        camera={{ fov: 100, near: 0.1, far: 2000, position: [0, 0, 5] }}
      >

        <React.Suspense
          fallback={
            <Html center>
              <Loader />
            </Html>
          }>
          <CameraController />
          <ambientLight intensity={0.5} />
          <pointLight position={[-10, -10, -10]} />

          {Array.from({ length: 8 }, (_, i) => {
            return <>
              {Array.from({ length: 8 }, (_, j) => renderBox(i, j))
              }
            </>
          })}
        </React.Suspense>
      </Canvas>
    </div>
  )
}

export default App;




/**
 * 
 *   {Array.from({ length: 8 }, (_, i) => {
          return <>
            {Array.from({ length: 8 }, (_, j) => renderBox(i,j) )
            }
          </>
        })}
 */
