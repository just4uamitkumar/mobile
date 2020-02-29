import React, { Component } from 'react';
import {Container, FormGroup, Card, CardBody,CardHeader, Input, Button,
Form, Table, Label} from 'reactstrap';

class Weather extends Component {
    constructor(props){
        super(props);
        this.state = {
            pageTitle: 'Weather',
            city:'',
            cityName:'',
            weatherData:[],
            weatherReport:[]
        }
    }

    onChange = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    onChange2 = (event) => {
        const {name, value} = event.target
        this.setState({
            [name]:value
        })
    }

    onSubmit = (event) => {
        const {city, weatherData} = this.state
        event.preventDefault();
        fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`)
        .then(data => {
            return data.json()
        }).then(data2 => {
            console.log(data2);
            weatherData.push(data2)
        })
    }

     onSubmit2 = async (event) => {
        const {cityName, weatherReport} = this.state
        event.preventDefault();
        const data = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=09c45bfe49a436f7f74288d921e917f6`);
        const data2 = await data.json(); 
        console.log(data2)       
        weatherReport.push(data2);       
    }

  render(){
    return (
        <div className="pageCont">
            <div className="pageHeader">
                <Container>
                    <h1>{this.state.pageTitle}</h1>

                </Container>                
            </div>
            <div className="content">
                <Container>
                    
                    <Card>
                        <CardHeader>
                            <h4>Weather API</h4>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label>City Name</Label>
                                    <Input type="text" onChange={this.onChange}
                                    name="city" value={this.state.city}/>
                                </FormGroup>
                                <FormGroup className="text-right">
                                    <Button color="primary">Get Temperature
                                    </Button>
                                </FormGroup>
                            </Form>
                        </CardBody>

                        <Table hover striped>
                            <thead>
                                <tr>
                                    <th>City ID</th>
                                    <th>City Name</th>                                    
                                    <th>Temperature</th>
                                    <th>Weather</th>
                                    <th>Description</th>
                                    <th>Wind Speed</th>
                                    <th>Time Zone</th>
                                    <th>Pressure</th>
                                    <th>Humadity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.weatherData.map((e, index) => 
                                    <tr key={index}>
                                        <td>{e.id}</td>                                        
                                        <td>{e.name}</td>
                                        <td>{e.main.temp}</td>
                                        <td>{e.weather[0].main}</td>
                                        <td>{e.weather[0].description}</td>
                                        <td>{e.wind.speed}</td>
                                        <td>{e.timezone}</td>
                                        <td>{e.main.pressure}</td>
                                        <td>{e.main.humidity}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        
                    </Card> 

                    <Card>
                        <CardHeader>
                            <h4>Weather API 2</h4>
                        </CardHeader>
                        <CardBody>
                            <Form onSubmit={this.onSubmit2}>
                                <FormGroup>
                                    <Label>City Name</Label>
                                    <Input type="text" onChange={this.onChange2}
                                    name='cityName' value={this.state.cityName}/>
                                </FormGroup>
                                <FormGroup className="text-right">
                                    <Button color="primary">Get Temperature
                                    </Button>
                                </FormGroup>
                            </Form>
                        </CardBody>

                        <Table hover striped>
                            <thead>
                                <tr>
                                    <th>City ID</th>
                                    <th>City Name</th>                                    
                                    <th>Temperature</th>
                                    <th>Weather</th>
                                    <th>Description</th>
                                    <th>Wind Speed</th>
                                    <th>Time Zone</th>
                                    <th>Pressure</th>
                                    <th>Humadity</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                this.state.weatherReport.map((e, index) => 
                                    <tr key={index}>
                                        <td>{e.id}</td>                                        
                                        <td>{e.name}</td>
                                        <td>{e.main.temp}</td>
                                        <td>{e.weather[0].main}</td>
                                        <td>{e.weather[0].description}</td>
                                        <td>{e.wind.speed}</td>
                                        <td>{e.timezone}</td>
                                        <td>{e.main.pressure}</td>
                                        <td>{e.main.humidity}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                        
                    </Card>      
                </Container>                
            </div>
        </div>           
      );
  }  
}

export default Weather;
