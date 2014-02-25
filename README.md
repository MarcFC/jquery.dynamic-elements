jQuery Dynamic Elements Plugin v1.0
===================================

This jquery plugin helps you to add and remove items dynamically. It will handle the minimum and maximum number of elements you want.


## Usage examples

### Example 1

Adding and removing input fields dynamically.

#### HTML
```
<div class="input-field"><input type="text"/></div>
<br/>
<button id="add-input">Add</button>
<button id="remove-input">Remove</button>
```

#### jQuery
```
$('.input-field').dynamicElements( {  
    addSelector: $('#add-input'),
    removeSelector: $('#remove-input')
});
```


### Example 2

Adding and removing blocks (`.block), always keeping between 2 and 5 blocks.

#### HTML
```
<button id="add-block">Add</button>
<button id="remove-block">Remove</button>
<span class="total-blocks"></span>
<br/>
<div class="block"></div>
```

#### jQuery
```
$('.block').dynamicElements( {  
    addSelector: $('#add-block'),
    removeSelector: $('#remove-block'),
    minSize: 2,
    maxSize: 5,
    onAddFinish: function() {
        var num = $('.block').length;
        $('.total-blocks').html("Total blocks: "+num);
    },
    onRemoveFinish: function() {
        var num = $('.block').length;
        $('.total-blocks').html("Total blocks: "+num);
    }
});
```


### Options

The main funcion, `dynamicElements()' accepts different options:

Option              | Explanation
------------------- | ---------------------------------
`addSelector`       | The selector of the item that, when clicked, will add an element
`removeSelector`    | The selector of the item that, when clicked, will remove an element
`minSize`           | Minimun number of elements
`maxSize`           | Maximum number of elements
`onAddFinished`     | Callback function when add is completed
`onRemoveFinished`  | Callback function when remove is completed


## Copyright and license

Copyright (c) 2014 Marc Fernandez
This projected is licensed under the terms of the MIT license.