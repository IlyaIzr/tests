import React, { useState } from "react";
import { Button, Form, Container } from 'semantic-ui-react';
import { default_passenger } from "./staticData";

export default function FormExample() {

  const [passengers_info, setPassengers_info] = useState({
    passengers: [{ ...default_passenger }]
  });

  function on_change(e, index) {
    const { name, value } = e.target;
    let new_passengers = [...passengers_info.passengers];
    new_passengers[index][name] = value;
    setPassengers_info({
      passengers: new_passengers
    })
  }
  function on_check(e, index) {
    const { name, checked } = e.target;
    const new_passengers = [...passengers_info.passengers];
    new_passengers[index][name] = checked;
    setPassengers_info({
      passengers: new_passengers
    })
  }
  const add_pass = () => {
    console.log(default_passenger)
    setPassengers_info({
      passengers: [...passengers_info.passengers, { ...default_passenger }]
    })
  }
  const remove_pass = index => {
    const new_list = [...passengers_info.passengers];
    new_list.splice(index, 1);
    setPassengers_info({
      passengers: new_list
    })
  }

  const handle_submit = async (event) => {
    event.preventDefault();
    try {
      const rawResponse = await fetch('https://webhook.site/6f5c041d-fba0-46bf-b166-0c4c2a17cf21', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(passengers_info)
      });
      setPassengers_info({
        passengers: [{ ...default_passenger }]
      })
    } catch (err) {
      console.log('debug ' + err)
    }
  }

  return (
    <div>
      <h2 className="form__title">Fill the form</h2>
      <Button className="form__add_passenger" inverted color='blue' onClick={add_pass}>
        Add passenger
      </Button>
      <Form className="form__itself" onSubmit={handle_submit}>
        {passengers_info.passengers.map((pass, index) => {
          return (
            <div key={index}>
              <Form.Group widths='equal'>

                <Form.Input required
                  label='First name'
                  placeholder='First Name'
                  name="firstName"
                  value={pass.firstName} type="text"
                  className="form__firstName" fluid
                  onChange={e => on_change(e, index)}
                />
                <Form.Input required
                  label='Last name'
                  placeholder='Last Name'
                  name="lastName"
                  value={pass.lastName}
                  type="text"
                  className="form__lastName" fluid
                  onChange={e => on_change(e, index)}
                />
                <Form.Field
                  control='select'
                  label='Gender'
                  name="gender"
                  value={pass.gender}
                  className="form__gender"
                  onChange={e => on_change(e, index)}
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </Form.Field>

              </Form.Group>

              <Form.Input required
                label='Your birtdate'
                value={pass.birthdate}
                name="birthdate"
                type="text"
                className="form__birthdate" width={4}
                onChange={e => on_change(e, index)}
              />

              <Form.Input
                label='Your contact number'
                value={pass.phoneNumber}
                className="form__phoneNumber" width={4}
                name="phoneNumber"
                onChange={e => on_change(e, index)}
              />
              <Form.Field
                label='I want to recieve notifications'
                control='input' type='checkbox'
                checked={pass.isSubscribed}
                onChange={e => on_check(e, index)}
                className="form__isSubscribed" width={4}
                name="isSubscribed"
              />
              <Container>
                {passengers_info.passengers.length > 1 &&
                  <Button className="form__add_passenger" inverted color='red'
                    onClick={() => remove_pass(index)} type="button"
                  >
                    Remove passenger
                  </Button>
                }
              </Container>
            </div>
          )
        })
        }
        <Button type='submit' color='teal'>Submit</Button>
      </Form>
    </div>
  )
}
