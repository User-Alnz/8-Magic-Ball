import { ft_run_eightBall_game, ft_reset_game_fields, ft_store_str_in_array, ft_copy_str_to, Limit_Input_maxLength } from "./Function_repertory.js";
import { ft_circle_animation, ft_move_element_from_right_and_left} from "./Animation.js";
//console.log("Main.js proprely set");

const input_string = document.getElementById("input_box");
let output_string = document.getElementById("QUESTION_string");
const button_play = document.getElementById("PLAY");
const button_play_again = document.getElementById("PLAY_AGAIN");
const box_containing_animation = document.getElementsByClassName("circle_number8");
const box_to_animate_on_horizontal_axis = document.getElementById("cursorBox");
const element_animated = document.getElementsByClassName("number8");
let answer_string = document.getElementById("Answer");

var temp_memory;
var max_length_input;

temp_memory = []; // to use fr_reset_game_fields & ft_store_str_in_array
max_length_input = 50; // Input cannot be longer than 50 char
const horizontal_axis = box_containing_animation[0].clientWidth;
const radius_axis_Y = box_containing_animation[0].clientHeight/8;
const radius_axis_X = box_containing_animation[0].clientWidth/8;

ft_store_str_in_array(answer_string, temp_memory);

input_string.addEventListener("input",()=>{

    ft_copy_str_to(input_string, output_string);
    Limit_Input_maxLength(input_string, max_length_input);   
});

button_play.addEventListener("click", () =>{

    if(input_string.value.length < 10)
        alert("10 characters minimum");
        else{
                ft_run_eightBall_game(answer_string);
                ft_circle_animation(radius_axis_X, radius_axis_Y, element_animated[0]);
                ft_move_element_from_right_and_left(horizontal_axis, box_containing_animation[0]);
            }
});

button_play_again.addEventListener("click",()=>{

    ft_reset_game_fields(input_string, output_string, answer_string, temp_memory[0]);
});


