// Copyright (c) 2023 Ben Thomson. All rights reserved.
//
// Created by: Ben Thomson
// Created on: 04/03/2023
// This file contains the JS functions for index.html

// This function calculates the volume of a sphere
function calculateVolume () {
  // Get the user input
  let radius = parseFloat(document.getElementById("radius").value);

  // Perform mathematical equations
  let volumeOfSphere = 4.0 / 3.0 * Math.PI * Math.pow(radius, 3);

  // Display calculations back to user
  document.getElementById("calculations").innerHTML = "The volume of the sphere is " + volumeOfSphere.toFixed(2) + " cm<sup>3</sup>."
}