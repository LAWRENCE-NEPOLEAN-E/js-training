//Garbage cCollection(GC) Defination:
    /*A form of automatic memory management known as garbage collection (GC). 
The purpose of a garbage collector is to monitor memory allocation and determine 
when a block of allocated memory is no longer needed and reclaim it. */

// Mark-and-sweep algorithm:

    /*This algorithm assumes the knowledge of a set of objects called roots. 
In JavaScript, the root is the global object. 
Periodically, the garbage collector will start from these roots, 
find all objects that are referenced from these roots, 
then all objects referenced from these.*/


//Reference-counting garbage collection:
    /*This algorithm reduces the problem from determining whether or not an object is still needed to determining 
if an object still has any other objects referencing it.
An object is said to be "garbage", or collectible 
if there are zero references pointing to it. */

//Example:
let testvar1 = {key1: 10, key2 : 20} 
testvar1.key1 = 1;                      // referance count here is 1, because it uses the object referance here.

let testvar2 = {key1: 10, key2 : 20} 
testvar2 = 1;                          // referance count here is 0, because it does not uses the object referance here and said to be garbage.  

//Memory management :

/*Low-level languages like C, have manual memory management primitives such as malloc() and free().
In contrast, Java,JavaScript automatically allocates memory when objects are created and frees it when they are not used anymore (garbage collection).
This automaticity is a potential source of confusion: it can give developers the false impression that they don't need to worry about memory management. */
