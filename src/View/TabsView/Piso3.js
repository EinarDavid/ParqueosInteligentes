import React, { Component } from "react";
import { View, Text, Alert, Button, Image, ImageBackground } from 'react-native';
import Images from '../../Config/Images'
import SocketIOClient from 'socket.io-client/dist/socket.io.js'


export default class Pruebas extends Component {
    constructor(props) {
        super(props);

        this.state = {
            valorprueba: 0,
            imagen_sensor1: Images.HAYAUTO,
            estado_sensor1: "DISPONIBLE",
            imagen_sensor2: Images.HAYAUTO,
            estado_sensor2: "DISPONIBLE",
        };
      
        this.actualizar = this.actualizar.bind(this);
        setTimeout(()=>
    {
      this.socket = SocketIOClient('http://138.128.243.212', { transports: ['websocket'], jsonp: false });
      this.socket.connect();
      this.socket.on('espacios', (res)=>
      {
        this.actualizar(res)
      });
    },1000)

    }
    actualizar(info)
    {
        console.log("Piso 3 -------------------------")
        console.log(info)
        info.map(a=>
            {
                if(a.piso == "3")
                {
                    if(a.estadouno == "libre")
                    {
                        this.setState(previo => ({
                            imagen_sensor1: Images.NOHAYAUTO,
                            estado_sensor1: a.estadouno
                        }));
                    }
                    else
                    {
                        this.setState(previo => ({
                            imagen_sensor1: Images.HAYAUTO,
                            estado_sensor1: a.estadouno
                        }));
                    }
                    if(a.estadodos == "libre")
                    {
                        this.setState(previo => ({
                            imagen_sensor2: Images.NOHAYAUTO,
                            estado_sensor2: a.estadodos
                        }));
                    }
                    else
                    {
                        this.setState(previo => ({
                            imagen_sensor2: Images.HAYAUTO,
                            estado_sensor2: a.estadodos
                        }));
                    }
                }
            })
    }
    render() {


        return (
            <ImageBackground source={Images.SPLASFLOOR} style={{ width: '100%', height: '100%' }}>
                <View style={{ flex: 1, justifyContent: "center", alignItems: 'center' }}>
                    <Image source={Images.LINE} style={{ height: 30 }}></Image>
                    <View>
                    <Image source={this.state.imagen_sensor1} style={{ height: 200, width: 350 }} ></Image>
                        <Text style={{color:'#fff'}}>{this.state.estado_sensor1}</Text>
                    </View>
                    <Image source={Images.LINE} style={{ height: 30 }}></Image>
                    <View>
                    <Image source={this.state.imagen_sensor2} style={{ height: 200, width: 350 }} ></Image>
                        <Text style={{color:'#fff'}}>{this.state.estado_sensor2}</Text>
                    </View>
                    <Image source={Images.LINE} style={{ height: 30 }}></Image>
                </View>

            </ImageBackground>
        );
    }
}
/*
 <Image source={this.state.imagen_sensor1} style={{ height: 200, width: 350 }} ></Image>
                        <Text>{this.state.estado_sensor1}</Text>
<Image source={this.state.imagen_sensor2} style={{ height: 200, width: 350 }} ></Image>
                        <Text>{this.state.estado_sensor2}</Text>

*/