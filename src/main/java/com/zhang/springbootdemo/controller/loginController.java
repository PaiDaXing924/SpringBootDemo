package com.zhang.springbootdemo.controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

@Slf4j
@Controller
public class loginController {

    @RequestMapping(value={"/index","/"}, method= RequestMethod.GET)
    public String index() {
        log.info("欢迎进入springbootdemo系统");
        return "index";
    }

    @RequestMapping(value = "/login",method = RequestMethod.POST)
    public String login(String email, String password) {

        log.info("email："+email+"，password："+password);

        return "index";
    }

}
