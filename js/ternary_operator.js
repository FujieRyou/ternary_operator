

    // getFree = (judge) =>{
    //     // (条件 ? trueの値 : falseの値)
    //     return (judge ? "合格" : "不合格")
    // }
    // console.log(getFree(true));
    // console.log(getFree(false));
    
    
    const ans = document.querySelectorAll(".ans")
    console.log(ans);
    const quizWrap = document.querySelector(".quizWrap")
    console.log(quizWrap);
    const judgeWrap = document.querySelector(".judgeWrap")
    console.log(judgeWrap);


    respons = (clickAnswer) =>{
        return (clickAnswer == 099 ? "正解" : "不正解")
    }

    ans.forEach((i,e)=>{
        i.addEventListener("click",()=>{
            // console.log(i.innerText);
            const returnValue = respons(i.innerText)
            console.log(returnValue);

            quizWrap.style.display = "none"
            judgeWrap.style.display = "flex"
            judgeWrap.innerHTML = `
            <p>${returnValue}</p>
            `
        })
    })
