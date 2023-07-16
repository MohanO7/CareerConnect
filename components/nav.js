const navbar = ()=>{
    return `<div id="nmain">
    <img src="./img/name.jpg"alt="" style="width: 100px">
    <div>
        <div onmouseenter="showOption(0)" class="optionDiv">
            <a href="">Internships </a>
            <div class="icon"></div>
        </div>
        <div onmouseenter="showOption(1)" class="optionDiv">
            <a href="">Online Trainings </a>
            <div id="off">70% OFF</div>
            <div class="icon"></div>
        </div>
        <div onmouseenter="showOption(2)" class="optionDiv">
            <a href="">Jobs </a>
            <div class="icon"></div>
        </div>
        <div>
            <div id="nav_log">
                <a style="color:white;background-color: #4f23ff;" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Login</a>
            </div>
        </div>
        <div onmouseenter="showOption(3)" class="optionDiv">
    
            <div id="nav_raj">
                <div>
                    <a href="">Register </a>
                    <div class="icon"></div>
                </div>
            </div>
        </div>
    </div>
    </div>
    
    <div id="nav_option">
    <div class="navOptiondiv">
        <div>
            <p>Location</p>
            <p>Profile</p>
            <p>Category</p>
            <p>Specializations</p>
        </div>
        <div>
            <a href="./Rajat.html">Work from Home</a>
            <a href="">Internship in India</a>
            <a href="">Internship in Delhi</a>
            <a href="">Internship in Bangalore</a>
            <a href="">Internship in Hyderabad</a>
            <a href="">Internship in Mumbai</a>
            <a href="">Internship in Chennai</a>
            <a href="">Internship in Gurgaon</a>
            <a href="">Internship in Kolkata</a>
            <a href="">Virtual internship</a>
    
        </div>
    </div>
    <div class="navOptiondiv">
        <div>
            <p>Most Popular</p>
            <p>Programming</p>
            <p>Business & Management</p>
            <p>Core Engineering</p>
            <p>Data Science</p>
        </div>
        <div>
            <a href="">Digital Marketing</a>
            <a href="">Programming with Python</a>
            <a href="">AutoCAD</a>
            <a href="">Advanced Excel</a>
            <a href="">Machine Learning</a>
            <a href="">Android App Development</a>
            <a href="">Data Science</a>
            <a href="">Programming with C and C++</a>
            <a href="">Financial Modelling and Valuation</a>
        </div>
    </div>
    <div class="navOptiondiv">
        <div>
            <p>Location</p>
            <p>Category</p>
        </div>
        <div>
            <a href="">Remote</a>
            <a href="">Website Design</a>
            <a href="">Photoshop</a>
            <a href="">Mobileapp</a>
            <a href="">Graphic Design</a>
            <a href="">Logo Design</a>
            <a href="">Marketing</a>
            <a href="">Finance</a>
            <a href="">Content Writing</a>
           
        </div>
    </div>
    <div class="navOptiondiv" style="height:fit-content">
        <div style="box-shadow:none">
        </div>
        <div style="box-shadow: none"> 
            <a href="./registration1.html">As a student</a>
            <a href="./registration2.html">As a employer</a>
        </div>
    </div>
    </div>
`
    }
    export default navbar