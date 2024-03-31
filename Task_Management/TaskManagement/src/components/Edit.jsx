import { Button, Checkbox, Flex, FormLabel, Heading, Input, useToast } from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import { useParams } from "react-router-dom";

const intialState = {
  title: "",
  description: "",
  status: "",
  due_date: "",
  id: "",
};

const reducer = (state, action) => {
  console.log(action.payload,"ds");
  switch (action.type) {
    case "title":
      return { ...state, title: action.payload };
    case "description":
      return { ...state, description: action.payload };
    case "due_date":
      return { ...state, due_date: action.payload };
    case "status":
      return { ...state, status: action.payload };
    case "set":
      return { ...state, title:action.payload.title,description:action.payload.description,due_date:action.payload.due_date,status:action.payload.status };
  }
};

const Edit = () => {
  const { id } = useParams();
  const [data, setData] = useState({});
  const [state, dispatch] = useReducer(reducer, intialState);
  const toast=useToast()
  // console.log(data);
  // console.log(state);
  const fetchData = () => {
    try {
      axios.get(`http://localhost:8080/tasks/${id}`).then((data) => {
        setData(data.data);
        dispatch({ type: "set", payload: data.data });
      });
    } catch (error) {
      console.log(error);
    }
  
  };

  useEffect(() => {
    fetchData();
  }, []);

  const submitData=()=>{

       
    //  console.log(newData);
       axios.patch(`http://localhost:8080/tasks/${1}`,
        state
       )
       showToast()
  }

  function showToast(){
    toast({
      title: 'Account created.',
      description: "We've created your account for you.",
      status: 'success',
      duration: 9000,
      isClosable: true,
    })
  }



  return (
    <>
    <Heading>Edit Task</Heading>
    <hr />
    <br /><br />
      <FormLabel>Title</FormLabel>
      <Input
        value={state.title}
        onChange={(e) => dispatch({ type: "title", payload: e.target.value })}
      />
      <FormLabel>Description</FormLabel>
      <Input
        value={state.description}
        onChange={(e) =>
          dispatch({ type: "description", payload: e.target.value })
        }
      />
      <FormLabel>Due date</FormLabel>
      <Input
        value={state.due_date}
        onChange={(e) =>
          dispatch({ type: "due_date", payload: e.target.value })
        }
      />
      <Flex>
        <FormLabel>Status</FormLabel>
        <Checkbox
          isChecked={state.status}
          onChange={(e) =>
            dispatch({ type: "status", payload: e.target.isChecked })
          }
        />
        <FormLabel></FormLabel>
      </Flex>
      <br />
      <Button onClick={submitData}>Submit</Button>
    </>
  );
};

export default Edit;
