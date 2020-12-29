import React from 'react';
import {Image} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import IconIonics from 'react-native-vector-icons/MaterialCommunityIcons';

Icon.loadFont()
IconIonics.loadFont()
// Управляемый для любых значений
const IconComponent = ({title, size=20, color="white"}) => <Icon name={title} size={size} color={color}/>
// Фиксированные наименования
const tooltip = <Icon name="infocirlceo" size={20} color="white" />
const arrowLeft = <Icon name="right" size={20} color="#949AA5" />
const ArrowLeft =  ({size=20, color=ELECTRIC_BLUE})=><Icon name="left" size={size} color={color}  />
const Close = ({size=25, color=ELECTRIC_BLUE})=><Icon name="close" size={size} color={color} />
const arrowDown = <Icon name="arrowdown" size={40} color="#949AA5" />
const closeBlue = <Icon name="close" size={25} color="#198FE4" />
const search = <Icon name="search1" size={17} color="#3C3C43" />
const car = <Icon name="car" size={17} color="white" />
const settings = <IconIonics name="bowling" size={17} color="white" />
const CameraIcon = ({name="camera", color="#3C3C43", size=27})=><Icon name={name} size={size} color={color} />
const  Basket = ({color="white", size=37}) => <Icon name="delete" size={size}  color={color} />
export {
    tooltip, 
    IconComponent,
    arrowLeft,
    arrowDown,
    closeBlue,
    search,
    car,
    settings,
    CameraIcon,
    ArrowLeft,Close,
    Basket
}