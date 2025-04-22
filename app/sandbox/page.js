"use client"
import { useState } from "react";

export default function Page() {
        function callback () {
            console.log("callback function")
        }

        function DoSomething(callback) {
            console.log("Before callback")
            callback();
            console.log("After callback")
        }

    return (
        <div>
            <DoSomething/>
        </div>
    );
}