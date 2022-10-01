// retrieveing
var info = firebase.database().ref("inputform");
// console.log(db);
info.once("value" , function(snapshot){
    var data  = snapshot.val();
    // data = Object.keys(data);
    // var length = data.length;
    var lastElement = Object.keys(data).pop();
    console.log(data[lastElement]);
    lastElement = data[lastElement];
    // var newSkill = document.createElement("span");
    // newSkill.innerHTML = lastElement['skill1']

    document.getElementById('name').innerHTML = ""+ '<br>' + lastElement.name;
    document.getElementById('domain').innerHTML = lastElement.domain;
    document.getElementById('bio').innerHTML ='<br>'+"Hey There!"+'<br>' + lastElement.bio ;

    document.getElementById('project-list').innerHTML = `
    <div class="serial-number-container"><span class="serial-number">01</span></div>
    <div class="project-item">
        <div class="project-desc w-60">
            <h1 class="project-name">Name Of Project 1</h1>
            <div class="project-desc-text">`+lastElement.project1+`</div>
            <a href="" class="project-link">Project link <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <div class="w-10"></div>
        <div class="project-image w-30"><img src="./images/profile.jpg"></div>
    </div>
    <div class="serial-number-container"><span class="serial-number">02</span></div>
    <div class="project-item">
        <div class="project-desc w-60">
            <h1 class="project-name">Name Of Project 2</h1>
            <div class="project-desc-text">`+lastElement.project2+`</div>
            <a href="" class="project-link">Project link <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <div class="w-10"></div>
        <div class="project-image w-30"><img src="./images/profile.jpg"></div>
    </div>
    <div class="serial-number-container"><span class="serial-number">03</span></div>
    <div class="project-item">
        <div class="project-desc w-60">
            <h1 class="project-name">Name Of Project 3</h1>
            <div class="project-desc-text">`+lastElement.project3+`</div>
            <a href="" class="project-link">Project link <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <div class="w-10"></div>
        <div class="project-image w-30"><img src="./images/profile.jpg"></div>
    </div>
    <div class="serial-number-container"><span class="serial-number">04</span></div>
    <div class="project-item">
        <div class="project-desc w-60">
            <h1 class="project-name">Name Of Project 4</h1>
            <div class="project-desc-text">`+lastElement.project4+`</div>
            <a href="" class="project-link">Project link <i class="fa-solid fa-arrow-up-right-from-square"></i></a>
        </div>
        <div class="w-10"></div>
        <div class="project-image w-30"><img src="./images/profile.jpg"></div>
    </div>            
    `;
    // var newElement = document.createElement("div");
    document.getElementById("skill-items").innerHTML = `
    <div class="skill-item-container" id="skill-item-container">
        <div class='serial-number-container'><span class='serial-number' id='sno'>01</span></div>
        <div class='skill-item' id='skill-item'>`+lastElement.skill1+`</div>
    </div>
    <div class="skill-item-container" id="skill-item-container">
        <div class='serial-number-container'><span class='serial-number' id='sno'>02</span></div>
        <div class='skill-item' id='skill-item'>`+lastElement.skill2+`</div>
    </div>
    <div class="skill-item-container" id="skill-item-container">
        <div class='serial-number-container'><span class='serial-number' id='sno'>03</span></div>
        <div class='skill-item' id='skill-item'>`+lastElement.skill3+`</div>
    </div>
    <div class="skill-item-container" id="skill-item-container">
        <div class='serial-number-container'><span class='serial-number' id='sno'>04</span></div>
        <div class='skill-item' id='skill-item'>`+lastElement.skill4+`</div>
    </div>
    `;
    // document.getElementById("skill-items").appendChild(newElement);
    console.log(length);
  })
