const storeState = () => {
  let currentState = {};
  return (stateChangeFunction = state => state) => {
    const newState = stateChangeFunction(currentState);
    currentState = {...newState};
    return newState;
  };
};

const stateControl = storeState();
const stateControl2 = storeState();

const changeState = (prop) => {
  return (value) => {
    return (state) => ({
      ...state,
      [prop] : (state[prop] || 0) + value
    });
  };
};

const feed = changeState("soil")(1);
const blueFood = changeState("soil")(5);

const hydrate = changeState("water")(1);
const superWater = changeState("water")(5);

$(document).ready(function(){
  $('#feed').click(function() {
    const newState = stateControl(feed);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#super-feed').click(function(){
    const newState = stateControl(blueFood);
    $('#soil-value').text(`Soil: ${newState.soil}`);
  });
  $('#water').click(function() {
    const newState = stateControl(hydrate);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#super-water').click(function() {
    const newState = stateControl(superWater);
    $('#water-value').text(`Water: ${newState.water}`);
  });
  $('#feed2').click(function() {
    const plant2 = stateControl2(feed);
    $('#soil-value2').text(`Soil: ${plant2.soil}`);
  });
  $('#super-feed2').click(function(){
    const plant2 = stateControl2(blueFood);
    $('#soil-value2').text(`Soil: ${plant2.soil}`);
  });
  $('#water2').click(function() {
    const plant2 = stateControl2(hydrate);
    $('#water-value2').text(`Water: ${plant2.water}`);
  });
  $('#super-water2').click(function() {
    const plant2 = stateControl2(superWater);
    $('#water-value2').text(`Water: ${plant2.water}`);
  });
  // $('#show-soil-state').click(function(){
  //   const currentState = stateControl();
  //   $('#soil-value').text(`Soil: ${currentState.soil}`);
  // });
  // $('#show-water-state').click(function(){
  //   const currentState = stateControl();
  //   $('#water-value').text(`Water: ${currentState.water}`);
  // });
});