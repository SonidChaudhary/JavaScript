//!













let details={
    name:"sonid",
    branch:"CSE",
    grade: function(math){
        math=93;
        console.log(math);
        console.log(this);

    }
}

details.grade();