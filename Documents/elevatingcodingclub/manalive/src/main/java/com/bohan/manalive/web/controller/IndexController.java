package com.bohan.manalive.web.controller;


import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;


@Controller
public class IndexController {

    Logger logger = LoggerFactory.getLogger(getClass());

    @GetMapping("/")
    public String index() {

        logger.info("INDEX()");
        logger.info("INDEX()2");
        logger.info("INDEX()3");

        return "index";
    }

}
