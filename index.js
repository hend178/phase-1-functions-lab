// Code your solution in this file!
const startingAddress = 42;
function distanceFromHqInBlocks(blocks){
    if (blocks >= 42){
    return (blocks - startingAddress)
    }
    else if (blocks <= 42){
        return (startingAddress - blocks)
    }
}
function distanceFromHqInFeet(blocks){
    if (blocks >= 42){
        return ((blocks - startingAddress) * 264)
    }
    else if (blocks <= 42){
        return ((startingAddress - blocks) * 264)
    }
}
function distanceTravelledInFeet(start, finish){
    let disTrav =(
    Math.abs(start - finish) * 264)
    return disTrav  
}
function calculatesFarePrice(start, destination){
    let distravel = distanceTravelledInFeet(start, destination)
    if (distravel < 400){
        return 0
    }
    else if (distravel >= 400 && distravel <= 2000){
        return ((distravel - 400) * 0.02)
    }
    else if (distravel > 2000 && distravel <=2500){
        return 25
    }
    else if (distravel > 2500){
        return "cannot travel that far"
    }
}