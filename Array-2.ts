//lucky13

function lucky13(nums:number[]):boolean{
    return !nums.includes(1) && !nums.includes(3)
    }
    
//sum28

    function sum28(nums:number[]):boolean{
        return nums.filter(elem=> elem===2).length===4
      }

//more14

function more14(nums:number[]):boolean{
    return nums.filter(e=> e===1).length > nums.filter(e=> e===4).length
  }