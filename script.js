  //MAP STUFF

  // Array of objects containing button data
  // Array of objects containing button data

  document.addEventListener("DOMContentLoaded", function () {
      const buttons = [{
              htmlFile: 'interactive_2.html',
              pngFile: 'fctime_2.png',
              time: '06-14\n08 PM'
          },
          {
              htmlFile: 'interactive_4.html',
              pngFile: 'fctime_4.png',
              time: '06-14\n10 PM'
          },
          {
              htmlFile: 'interactive_6.html',
              pngFile: 'fctime_6.png',
              time: '06-15\n12 AM'
          },
          {
              htmlFile: 'interactive_8.html',
              pngFile: 'fctime_8.png',
              time: '06-15\n02 AM'
          },
          {
              htmlFile: 'interactive_10.html',
              pngFile: 'fctime_10.png',
              time: '06-15\n06 AM'
          },
          {
              htmlFile: 'interactive_12.html',
              pngFile: 'fctime_12.png',
              time: '06-15\n08 AM'
          },
          {
              htmlFile: 'interactive_14.html',
              pngFile: 'fctime_14.png',
              time: '06-15\n10 AM'
          },
          {
              htmlFile: 'interactive_16.html',
              pngFile: 'fctime_16.png',
              time: '06-15\n12 PM'
          },
          {
              htmlFile: 'interactive_18.html',
              pngFile: 'fctime_18.png',
              time: '06-15\n02 PM'
          },
          {
              htmlFile: 'interactive_24.html',
              pngFile: 'fctime_24.png',
              time: '06-15\n04 PM'
          },
          {
              htmlFile: 'interactive_28.html',
              pngFile: 'fctime_28.png',
              time: '06-15\n06 PM'
          },
          {
              htmlFile: 'interactive_32.html',
              pngFile: 'fctime_32.png',
              time: '06-15\n08 PM'
          },
          {
              htmlFile: 'interactive_36.html',
              pngFile: 'fctime_36.png',
              time: '06-16\n12 AM'
          },
      ];
      const buttonContainer = document.getElementById("buttonContainer");
      const mapDetails = document.getElementById("mapDetails");
      const mapDisplay = document.getElementById("mapDisplay");
      const mapRange = document.getElementById("mapRange");
      const previousButton = document.getElementById("previousButton");
      const nextButton = document.getElementById("nextButton");
      let activeButtonIndex = 0;

      //Set the range max value to the number of buttons
      mapRange.max = buttons.length - 1;

      // Function to change the active button
      function setActiveButton(index) {
          const buttons = buttonContainer.getElementsByClassName("mapButton");
          for (let i = 0; i < buttons.length; i++) {
              buttons[i].classList.remove("activeMapButton");
          }
          buttons[index].classList.add("activeMapButton");
          activeButtonIndex = index;
      }

      // Function to change the map details and display
      function changeMap(button) {
          mapDetails.src = `./assets/${button.pngFile}`;
          mapDisplay.src = `./assets/${button.htmlFile}`;
      }

      // Function to handle button clicks
      function handleButtonClick(index) {
          if (index != +activeButtonIndex) {
              setActiveButton(index);
              changeMap(buttons[index]);
              mapRange.value = index;
          }
      }

      // Function to handle previous button click
      function handlePreviousButtonClick() {
          if (activeButtonIndex > 0) {
              handleButtonClick(+activeButtonIndex - 1);
          }
      }

      // Function to handle next button click
      function handleNextButtonClick() {
          if (+activeButtonIndex < buttons.length - 1) {
              handleButtonClick(+activeButtonIndex + 1);
          }
      }

      // Create buttons based on the array
      buttons.forEach((button, index) => {
          const buttonElement = document.createElement("button");
          const prevNextButtons = document.querySelector(".nextprev");
          buttonElement.innerHTML = `${button.time.replace(/\n/g, "<br>")}`;
          buttonElement.classList.add("mapButton");
          buttonElement.addEventListener("click", () => handleButtonClick(index));
          buttonContainer.insertBefore(buttonElement, prevNextButtons);
      });

      // Add event listeners to previous and next buttons
      previousButton.addEventListener("click", handlePreviousButtonClick);
      nextButton.addEventListener("click", handleNextButtonClick);

      // Add event listener to range input
      mapRange.addEventListener("input", () => {
          handleButtonClick(mapRange.value);
      });
      // Set the initial active button and map display
      setActiveButton(activeButtonIndex);
      changeMap(buttons[activeButtonIndex]);


  });

  // Update sidebar with content from Markdown files
  updateSidebarContent('./assets/information.md', 'informationContent');
  updateSidebarContent('./assets/extended_outlook.md', 'extendedOutlookContent');