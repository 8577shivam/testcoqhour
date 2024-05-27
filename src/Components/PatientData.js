import React from 'react'
import  { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import Card from './Card';
import heart from "../assets/HeartBPM.svg"
import temperature from "../assets/temperature.svg"
import respiratory from "../assets/respiratory.svg"
import Diagnosticlist from './Diagnosticlist';
const PatientData = ({data}) => {
  console.log(data,"working")
    
  return (
    <div>
          <>
                <h1>{data[0].name}</h1>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                    <Card
                    title={data[0].diagnosis_history[0].respiratory_rate.value}
                    level={data[0].diagnosis_history[0].respiratory_rate.levels}
                    name="Respiratory rate"
                    image={respiratory}
                    />
                    <Card
                    title={data[0].diagnosis_history[0].heart_rate.value}
                    level={data[0].diagnosis_history[0].heart_rate.levels}
                    name="Heart rate"
                    image={heart}
                    />
                    <Card
                    title={data[0].diagnosis_history[0].temperature.value}
                    level={data[0].diagnosis_history[0].temperature.levels}
                    name="Temperature"
                    image={temperature}
                    />
                </div>
                <Diagnosticlist list={data[0]?.diagnostic_list}/>
                </>

    </div>
  )
}

export default PatientData