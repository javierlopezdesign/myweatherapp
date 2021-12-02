<!-- function arrayReverse(array $inputArray): array
    {
        // TODO
    }
Here are three inputs we will use to evaluate your submission - how many of these can you solve?
    // #1 - Indexed array
    // #2 - Associative array
    $inputArray = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
    // #3 - Multidimensional. Please recursively reverse to a max depth of 2 levels
    $inputArray = ['a' => [1, 2, 3, 'a' => ['a', 'b', 'c' => ['a', 'b', 'c', 'd' => [1, 2, 3]]]], 2, 'c' => 3, 4, 5];
    Feel free to write and test your code in your preferred environment/IDE before submitting it below. -->
    
    <!-- $reverseArray = array(1, 2, 3, 4);
    $tmpArray = array();
    $arraySize = sizeof($reverseArray);
    
    for($i<arraySize; $i=0; $i--){
        echo $reverseArray($i);
    } -->
    
<?php
    // $inputArray = [1, 2, 3, 4, 5]; 
    // function arrayReverse(array $inputArray){
    //     for( $i=0 ; $i<sizeof($inputArray) ; $i++){
    //         $reversedArray[sizeof($inputArray)-$i-1] = $inputArray[$i];
    //     } 
    //     return $reversedArray
    // }
    // arrayReverse($inputArray);

    $inputArray = ['a' => 1, 'b' => 2, 'c' => 3, 'd' => 4, 'e' => 5];
    $reversedArray = array();
    function arrayReverse(array $inputArray){
        $arrayPos = count($inputArray)-1;
        foreach( $inputArray as $item => $item_value){
            $reversedValues[$arrayPos] = $item;
            $reversedKeys[$arrayPos] = $item_value;

            $arrayPos--;
        }
        for( $i=0 ; $i<sizeof($reversedValues) ; $i++){
            $reversedArray[$reversedValues[sizeof($reversedValues)-$i-1]] = $reversedKeys[$i];
        }
        print_r($reversedArray);
    }
    arrayReverse($inputArray);
    
?>