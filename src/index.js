import React from 'react';
import ReactDOM from 'react-dom';
//import './index.css';
import {
      BrowserRouter as Router,
           Routes,Route,Navigate,Link,
           Outlet, useParams, NavLink,
           useNavigate, useLocation} 
                         from 'react-router-dom';

ReactDOM.render(
	<Router>
	  <Routes>
	    <Route path="/" element={<Home />}/>
	    <Route 
	          path="/myapps" 
	          element={<Navigate replace to="/learn" />}/>
	    <Route path="/learn" element={<Learn />}>
	      <Route path="courses" element={<Courses />} >
	             <Route path=":courseid" element={<CourseId />}/>     
	      </Route>
	       <Route path="bundles" element={<Bundles />} />
	    </Route>
	    <Route path="dashboard" element={<Dashboard />} />
	  </Routes>
	</Router>,
  document.getElementById("root"));

  function Home(){
  	return(
  	<div>
  	  <h1>Home route</h1>
  	</div>
  	);
  }
  function Learn(){
  	return(
  	<div>
  	  <h1>Learn</h1>
  	  <h4>All courses are listed here</h4>
  	  <Link  className="btn btn-success" to ="/learn/courses">
  	  courses
  	  </Link>{" "}
  <Link className="btn btn-primary" to="/learn/bundles"
  >bundle</Link>
    <Outlet/>
  	 </div>
  	   );
         }
 function Courses(){
   const courseList = ["React", "Angular", "Vue", "Nodejs"]
   const randomCourseName =
      courseList[
          Math.floor(Math.random()*courseList.length)]
  	return(
  	<div>
  	  <h1>Home route</h1>
  	  <h4>Courses card</h4>
  	  <p>More test</p>
 <NavLink
  style={({isActive})=>{
  	return{
  		backgroundColor: isActive?"pink":"yellow"
  	}
  }}
  to={`/learn/courses/${randomCourseName}`}
  	                      >{randomCourseName}</NavLink>
 <NavLink className="btn btn-light" to={`/learn/courses/tests`}>tests</NavLink>
  	  <Outlet/>
 }
  	</div>
  	);
  }
   function Bundles(){
  	return(
  	<div>
  	  <h1>Home route</h1>
  	  <h4>Bundles card</h4>
  	</div>
  	);
  }
  function CourseId(){
   const navigate = useNavigate()
   const {courseid} = useParams();
  	return(
  	 <div>
  	  <h1>URL Parmas is : {courseid}</h1>
  	  <button 
        onClick={()=>{
        	navigate("/dashboard", {state: courseid});
        }}
  	   className="btn btn-warning">Price</button>
   <Link to="/dashboard" state={"DJANGO"}>Test link</Link>
  	 </div>
  	);
  }
  function Dashboard(){
  	const location = useLocation()
  	return(
  	<div>
  	<h1>Info that i got here is {location.state}</h1>
  	</div>)
  }