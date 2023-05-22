// Code your solution in this file!

function distanceFromHqInBlocks(distance){
    const Hq = 42;
    return Math.abs(distance - Hq);
}

function distanceFromHqInFeet(distance){
    const Hq = 42;
    const blocksAway = Math.abs(distance - Hq);
    return blocksAway * 264;

}

function distanceTravelledInFeet(start, destination){
    return Math.abs(destination - start) * 264;
    
}

function calculatesFarePrice(start, destination){
    const distanceInFeet = Math.abs(start - destination) * 264;
    if (destination-start === 1){
        return 0;
    }

   if (distanceInFeet > 2500){
    return "cannot travel that far";
   }
   else if (distanceInFeet > 2000)
   {
    return 25;
   }
   else if (distanceInFeet <= 2000){
    return .02 * (distanceInFeet-400);
   }

}

