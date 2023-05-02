// Using --watch or -w will "watch" a ts file.
// By doing this every time we save a ts file that's being watched the file is automatically compiled.
// Combined with a local server of some sort we can have the browser reload as well 
// creating a fluid/efficient workflow.

// Furthermore, if we navigate the project folder and enter tsc --init we initialise the folder with ts.
// This generates a json file that will include all of your ts settings.
// By entering tsc now we compile ALL of the ts files in the respective project folder.
// By entering tsc --watch or tsc -w we "watch" and therefore now compile 
// on any save of any file in the folder.

let somecode: string
somecode = "Max"

console.log(somecode)