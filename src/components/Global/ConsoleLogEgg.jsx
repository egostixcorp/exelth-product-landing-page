// components/ConsoleEasterEgg.tsx
"use client";

import { useEffect } from "react";

const ConsoleEasterEgg = () => {
  useEffect(() => {
    const styleRed = "color: #2dac5c; font-size: 12px;";
    const styleText = "color: #999; font-size: 12px;";
    const styleBlue = "color: #007aff; font-size: 12px;";

    console.log(
      `
%c                       ████              ████                                       
%c                    █████████           ████████                                    
%c                █████████████          █████████████                                
%c             █████████████████         ████████████████                             
%c             █████████████████        ██████████████████                            
%c             ██████████████████      ██████████████████                             
%c               ████████████████      █████████████████                              
%c                ████████████████    ████████████████                                
%c                  ███████████████  ███████████████                                  
%c                    ██████████████ █████████████                                    
%c                      ████████████████████████                                      
%c     ██████████          ██████████████████          ███████████                    
%c    ████████████████████ ███████████████████████████████████████                    
%c    ██████████████████████████        ██████████████████████████                    
%c    █████████████████████████          █████████████████████████                    
%c    ██████████████████████████        ██████████████████████████                    
%c    ████████████████████████████     ███████████████████████████                    
%c    ██████████████████   ██████████████████   ██████████████████                    
%c     ██████████         ████████████████████         ██████████                     
%c                      ████████████████████████                                      
%c                    █████████████  █████████████                                    
%c                  ██████████████    ██████████████                                  
%c                ████████████████     ███████████████                                
%c              █████████████████      █████████████████                              
%c             ██████████████████      ██████████████████                             
%c             █████████████████        █████████████████                             
%c              ███████████████          ███████████████                              
%c                  ███████████          ████████████                                 
%c                     ███████            ███████                                     

%cBuild a healthier world through intelligent infrastructure.
%chttps://www.exelth.com/about
    `,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleRed,
      styleText,
      styleBlue,
    );
  }, []);

  return null;
};

export default ConsoleEasterEgg;
