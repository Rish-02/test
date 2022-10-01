//db origin
   var inputform = firebase.database().ref("inputform");
  document.getElementById('inputform').addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();
    // var email = getElementVal('email');
    // var name = getElementVal('name');
    // var address = getElementVal('address');
    // var address2 = getElementVal('address2');
    // var city = getElementVal('city');
    // var state = getElementVal('state');
    // var domain = getElementVal('domain');
    var email = getElementVal('email');
    var name = getElementVal('name');
    var linkedinurl = getElementVal('url');
    var giturl = getElementVal('url1');
    var bio = getElementVal('bio');
    var projectSummary = getElementVal('task');
    var domain = getElementVal('domain');
    var skill1 = getElementVal('skill1');
    var skill2 = getElementVal('skill2');
    var skill3 = getElementVal('skill3');
    var skill4 = getElementVal('skill4');
    var project1 = getElementVal('project1');
    var project2 = getElementVal('project2');
    var project3 = getElementVal('project3');
    var project4 = getElementVal('project4');

    msg(email,name,linkedinurl,giturl,bio,projectSummary,domain,skill1,skill2,skill3,skill4,project1,project2,project3,project4);
    console.log(project2,project3,project4,inputform);
    document.getElementById("inputform").reset();
  }

  const msg =(email,name,linkedinurl,giturl,bio,projectSummary,domain,skill1,skill2,skill3,skill4,project1,project2,project3,project4) => {
    var newinputform = inputform.push();

    newinputform.set({
      name : name,
      email : email,
      linkedinurl: linkedinurl,
      giturl: giturl,
      bio : bio,
      projectSummary : projectSummary,
      domain : domain,
      skill1:skill1,
      skill2:skill2,
      skill3:skill3,
      skill4:skill4,
      project1: project1,
      project2: project2,
      project3: project3,
      project4: project4,
    });
  }

  const getElementVal= (id) => {
    return document.getElementById(id).value;
  };

  function red(){
    window.location.href = "./portfolio.html";
  }