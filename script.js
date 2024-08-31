
// function to toggle the active class in left section

function toggleActive(self) {
    var boxIDs = document.getElementsByClassName("left-section-box");
    for (var boxID of boxIDs) {
        boxID.classList.remove("active");
    }
    self.classList.add('active');
    showSelectedData(self);
}


//function to display relevent right section

function showSelectedData(self){
    var rid = (self.id).slice(5);  
    var rightCls = document.getElementsByClassName("diverse-right-section");
    var firstElement = rightCls.item(0);
    var childElem = firstElement.children;
    var rightData = Array.from(childElem);
    
    //var rightData = Array.from(document.getElementsByClassName("diverse-right-section").item(0).children);

    for (var elem of rightData) {
        elem.classList.add("hide");
    }

    document.getElementById(rid).classList.remove("hide");

}


