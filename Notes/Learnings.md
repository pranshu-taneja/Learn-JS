# Diff ways to access objects of a variable
> Dot property accessor: `object. property`

> Square brackets property access: `object['property']`

> Object destructuring: `const { property } = object`

![Image](https://dmitripavlutin.com/static/50a87420915de18f26da616865fe9825/59014/access-object-properties-2.png)

<hr>

# Pass by ref & Pass by value

<p style="color:lightgreen;">In javascript primittive variables are passed by value but objects are passed by reference (a little catch for function() though)</p>

## Read Both

## [*Pass By Reference VS Pass By Value*](https://www.scaler.com/topics/javascript/pass-by-value-and-pass-by-reference/)

## [*Catch of object passed by ref/value (call by sharing) in functions*](https://stackoverflow.com/a/3638034/13914357)

<p style="color:hotpink;">In this concept, equals operator plays a big role. When we create a variable, the equals operator notices whether you are assigning that variable a primitive or non-primitive value and then works accordingly.</p>


```js
let action = document.getElementById("action1") //where action1 is for selection drag and drop items
// until we use action.value --- action is an object (non primmitive)
// primmitive are immutable but their value change by assigning new value to them which means getting a new space created in memory
// basically primmitive are still immutable and they aren't modified but actually they are created as new when assigned again
//and the previous made varible is sent for garbage collection

let action = document.getElementById("action1").value   //now it is accessing the selected items content i.e: string
// now as being assigned as string it becomes primmitve and no longer is supposed to change in future with the updated value of selected item
// So better use .value later to access it by refrence gotcha??
//basically primmitive and non primmitve caused problem here (due to primmitive on pass by value characterstic)
```


```js
function changeStuff(a, b, c)       //call by sharing in reality
{
  a = a * 10;
  b.item = "changed";       // when internal properties are accessed they work as like reference
  c = {item: "changed"};
}

var num = 10;
var obj1 = {item: "unchanged"};
var obj2 = {item: "unchanged"};

changeStuff(num, obj1, obj2);

console.log(num);
console.log(obj1.item);
console.log(obj2.item);     
//answer : 10, changed, unchanged
```
<hr>

## Some Important terms You need to be aware of

## [*Node, Element, Html Collection, Node List Understand*](https://www.youtube.com/watch?v=rhvec8cXLlo)
## [*PDF NOTES WDS*](https://drive.google.com/file/d/1s7643GNduSCxjmS0dT5eJo6RhiEIyUAH/view?usp=share_link)
<hr>

### - **`NODE`** :- > A node is basically everything of your html document broken down piece of content. WHich include all the comment text element etc
### - **`ATTRIBUTE`** :-> 
### - **`ELEMENT`** :-> (and elements are mostly used 99.9%) Element is also a NOde but of a special type where All the tag you see are HTML elements Example: span, div, body, ahref etc. `queryselector` returns the first element that matches 
### - **`HTML-COLLECTION`** :->  
### - **`NODE-LIST`** :->        
### - **`PSEUDO-CLASS`** :-> 
### - **`PSEUDO-FUNCTIONS`** :-> 
### - **`AJAX`** :-> 
### - **`JQUERY`** :-> 
### - **`JSON`** :->  JSON object cannot contain function as value and.. their key has to be written under double quotes [*Important Read the Difference HERE*](https://www.programiz.com/javascript/json) . It is mostly used to pass data. Use stringify() and parse() to change js to json and vice versa


```js
//html
<p class= "a b c"></p> 

//js
document.querySelector(".a").classlist  //will return a b c
document.querySelector(".a").classlist.add("d")  //will add or append class to it then a b c d
//class list basically returns a domtoken list which means space seperated tokens (in class list its the class name with space sep word) --now no more misconception
//--(toggle)Although the classList property itself is read-only, you can modify its associated DOMTokenList using the add(), remove(), replace(), and toggle() methods.
```

```html
<div class="grandparent">
    <div class="parent1 parent">parent1</div>
    <div class="parent2 parent">
        <!-- Comment -->
        <span class="child">Child</span>
    </div>
</div>
<script>
    const grand = document.querySelector(".grandparent")
    console.log(grand.childNodes) //returns NodeList(5)
    console.log(grand.children)   //returns HTMLCollection(2)
</script>
```
### <p style="color:lightgreen;">So do you understand the reason and difference between these two NodeList gave us 5 values which means it will have include text comment actually everything (don't count). But in case of HTMLcollection it only returns 2 values cuz it has only two child elements it doesn't include text comment or other things only elements as you know</p>
