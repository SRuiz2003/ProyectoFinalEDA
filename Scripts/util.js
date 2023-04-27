function processInput(event) {
    event.preventDefault(); // prevent form from submitting
    // get input value
    //const input = document.getElementById("input").value;
    const input =  'Word Cup 1998 – Group A--Brazil,Norway,Morocco,Scotland--Brazil#2#1#Scotland,Norway#2#2#Morocco,Scotland#1#1#Norway,Brazil#3#0#Morocco,Morocco#3#0#Scotland,Brazil#1#2#Norway'
    const torneo = input.split("--");
    console.log(torneo);
    document.getElementById("output").value = torneo;
    // display output
  }

  function resolverTorneo(torneo) {
    // your processing logic goes here
    // return the organized output

    const output = resolverTorneo(input);
    document.getElementById("output").value = output;


  }

  function printHello() {
    console.log('Hello, World!');
  }