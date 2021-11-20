function DoPopupContent(Element)
{
    var NavBarContents = ["AboutUs", "OurMission", "Location", "Rules", "Pricing", "WhatToPack"];
    var NavBarContentLength = NavBarContents.length;
    for (var i = 0; i < NavBarContentLength; i++) 
    {
        document.getElementById(NavBarContents[i]).style.height = "0px";
        //Do something
    }
    if(document.getElementById(Element).style.height <= "0px" )
    {
        document.getElementById(Element).style.height = "600px";
    }
    else
    {
        document.getElementById(Element).style.height = "0px";
    }
}