let     angle;
let     length
let     run_animatiom;
let     run_move_element;

angle = 0;
length = 0;

export function ft_circle_animation(const_radius_axis_X, const_radius_axis_Y, var_element_to_animate)
{
    
    function animation()
    {
        angle += 0.3;

        var     position_of_P_on_Horizontal_axis_X =  const_radius_axis_X * Math.cos(angle);
        var     position_of_P_on_Vertical_axis_Y =  const_radius_axis_Y * Math.sin(angle);

        var_element_to_animate.style.left = `${position_of_P_on_Horizontal_axis_X}px`;
        var_element_to_animate.style.top = `${position_of_P_on_Vertical_axis_Y}px`;

        if( angle > 6 * Math.PI)
        {
            cancelAnimationFrame(run_animatiom);
            angle = 0;
            var_element_to_animate.style.left = 0;
            var_element_to_animate.style.top = 0;
        }else{
            run_animatiom = requestAnimationFrame(animation);
        }                     
        // console.log("free => ft_animation - run done");
    }

    animation();
}

export function ft_move_element_from_right_and_left(const_horizontal_axis, box_to_animate_on_horizontal_axis)
{
    var     flag_forward;
    var     flag_backward;

    flag_forward = false;
    flag_backward = false;
    
    function move_element()
    {
        run_move_element = requestAnimationFrame(move_element);

        if (length < (const_horizontal_axis * 1/3) && flag_forward === false)
        {
            length += 3;
            if(length >= (const_horizontal_axis * 1/3))
            {
                flag_forward = true;
            }
        } 
        else if(length > (const_horizontal_axis * 1/3) - (const_horizontal_axis * 2/3) && flag_forward == true && flag_backward === false )
        {
            length -= 3;
            if( length  <= (const_horizontal_axis * 1/3) - (const_horizontal_axis * 2/3))
            {
                flag_backward = true;
            }
        }
        else if (length < 0 && flag_backward === true)
        {
            length += 3;
            if(length >=0)
            { 
            cancelAnimationFrame(run_move_element);
            }
        }
       box_to_animate_on_horizontal_axis.style.left = `${length}px`;
       // console.log("free => ft_move_element - run done");
    }

    move_element();
    flag_forward = false;
    flag_backward = false;
}