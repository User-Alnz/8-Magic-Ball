export function ft_run_eightBall_game(dst_document_node)
{
    var     randomNumber;
    let     eightBall ='';
    var     return_output;

    var randomNumber = Math.floor(Math.random()*8);
    return_output = dst_document_node;

    switch(randomNumber){
        case 0 : 
        eightBall = 'It is certain';
        break;
        case 1 :
        eightBall = 'It is decidedly so';
        break;
        case 2 :
        eightBall = 'Reply hazy try again';
        break;
        case 3 :
        eightBall = 'Cannot predict now';
        break;
        case 4 :
        eightBall = 'Do not count on it';
        break;
        case 5 :
        eightBall = 'My sources say no';
        break;
        case 6 :
        eightBall = 'Outlook not so good';
        break;
        case 7 :
        eightBall = 'Sign point to yes';
        break;
    }
    return_output.innerText = eightBall;
}

export function ft_reset_game_fields(Input_field_to_clean, Output_field_to_clean, Answer_field_to_restore, array_active_memory)
{
    //Clear all fields taken as argument
    Input_field_to_clean.value = '';
    Output_field_to_clean.innerText = '';
    Answer_field_to_restore.innerText = array_active_memory;
}

export function ft_store_str_in_array(var_text_from_nodes_to_store, var_array_to_store_data)
{
    // Function is used only to store one string ! 
    // var var_array_to_store_data => /!\ Argument must be declared as an array /!\ 
    if (var_array_to_store_data[0] != null)
    {
        console.log("Error with  - ft_store_str_in_array - No more room avialable")
    }else{
    var_array_to_store_data.push(var_text_from_nodes_to_store.innerText);
    //console.log(var_text_from_nodes_to_store);
    }
    //console.log(var_array_to_store_data);
}

export function ft_copy_str_to(src_input_string, dst_document_node)
{
    let     Temporary_store_string;

    Temporary_store_string = src_input_string.value;
    dst_document_node.innerText = Temporary_store_string;
    //console.log(`the input is : ${src_input_string.value}`); -! Use only to verify if string is correctly taken - 
}

export function Limit_Input_maxLength(input_string, int_length_limit) {
    if (input_string.value.length > int_length_limit) {
        input_string.value = input_string.value.substring(0,int_length_limit);
    }
}