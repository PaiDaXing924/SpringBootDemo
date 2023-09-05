package com.zhang.springbootdemo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

@Slf4j
@Controller
public class indexController {

    @RequestMapping(value = "/sendAjax",method = RequestMethod.POST)
    @ResponseBody
    public String sendAjax(@RequestBody String params1) {
        log.info("前端返回参数为："+params1);
        return "sendAjax";
    }

}
