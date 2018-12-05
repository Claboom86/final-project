"use strict";
function animeDirective() {
    return {
        restrict: "A",
        replace: false,
        link: function ($scope, $element, $attrs) {
            anime({
                targets: '.food-choice',
                rotate: [
                    { value: ['1', '-1'], duration: 200 },
                    { value: ['2', '-2'], duration: 200 },
                    { value: ['3', '-3'], duration: 200 },
                    { value: ['2', '-2'], duration: 200 },
                    { value: ['1', '-1'], duration: 200 }
                ],
                duration: 1000,
                loop: true,
                easing: 'easeInOutCirc',
                delay: 8000
            });
            $element.on("click", () => {
                foodWobble();
                function foodWobble() {
                    $element.toggleClass("food-shake")
                    anime({
                        targets: '.food-shake',
                        scale: [
                            { value: [1, 1.5], duration: 320 },
                            { value: [1.5, 1], duration: 380 }
                        ],
                        easing: 'easeInOutQuad'
                    });
                    setTimeout(function () {
                        $element.toggleClass("food-shake"), 5000
                    })
                }

                const plate = document.querySelector(".plate");
                const count = plate.attributes[0].value;

                for (let i = 0; i <= count; i++) {
                    plateWobble(i);
                }

                function plateWobble(count) {
                    const animations = [
                        {
                            targets: '#item0',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['0.9', '-0.9'], duration: 200 },
                                { value: ['1.1', '-1.1'], duration: 195 },
                                { value: ['1.3', '-1.3'], duration: 185 },
                                { value: ['1.1', '-1.1'], duration: 190 },
                                { value: ['0.9', '-0.9'], duration: 195 },
                                { value: ['0.7', '-0.7'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.3', '-0.3'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "160px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'
                        },
                        {
                            targets: '#item1',
                            rotate: [
                                { value: ['0.6', '-0.6'], duration: 210 },
                                { value: ['0.8', '-0.8'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.3', '-1.3'], duration: 185 },
                                { value: ['1.1', '-1.1'], duration: 190 },
                                { value: ['0.9', '-0.9'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "210px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'
                        },
                        {
                            targets: '#item2',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "260px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        },
                        {
                            targets: '#item3',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "310px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        },
                        {
                            targets: '#item4',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "360px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        },
                        {
                            targets: '#item5',
                            rotate: [
                                { value: ['0.5', '-0.5'], duration: 210 },
                                { value: ['0.7', '-0.7'], duration: 205 },
                                { value: ['1', '-1'], duration: 200 },
                                { value: ['1.2', '-1.2'], duration: 195 },
                                { value: ['1.4', '-1.4'], duration: 185 },
                                { value: ['1.2', '-1.2'], duration: 190 },
                                { value: ['1', '-1'], duration: 195 },
                                { value: ['0.8', '-0.8'], duration: 200 },
                                { value: ['0.6', '-0.6'], duration: 205 },
                                { value: ['0.4', '-0.4'], duration: 210 }
                            ],
                            translateX: [
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.7, -0.7], duration: 210 },
                                { value: [0.4, -0.4], duration: 210 },
                                { value: [0.3, -0.3], duration: 210 },
                                { value: [0.2, -0.2], duration: 210 },
                                { value: [0.1, -0.1], duration: 210 },
                                { value: [0, -0], duration: 210 }
                            ],
                            bottom: "410px",
                            duration: 210,
                            offset: 500,
                            easing: 'easeInOutCirc'

                        }
                    ];

                    anime({
                        targets: '.plate',
                        rotate: [
                            { value: ['0.4', '-0.4'], duration: 210 },
                            { value: ['0.6', '-0.6'], duration: 205 },
                            { value: ['0.8', '-0.8'], duration: 200 },
                            { value: ['1', '-1'], duration: 195 },
                            { value: ['1.2', '-1.2'], duration: 185 },
                            { value: ['1', '-1'], duration: 190 },
                            { value: ['0.8', '-0.8'], duration: 195 },
                            { value: ['0.6', '-0.6'], duration: 200 },
                            { value: ['0.4', '-0.4'], duration: 205 },
                            { value: ['0.2', '-0.2'], duration: 210 }
                        ],
                        translateX: [
                            { value: [0.1, -0.1], duration: 210 },
                            { value: [0.2, -0.2], duration: 210 },
                            { value: [0.3, -0.3], duration: 210 },
                            { value: [0.4, -0.4], duration: 210 },
                            { value: [0.7, -0.7], duration: 210 },
                            { value: [0.4, -0.4], duration: 210 },
                            { value: [0.3, -0.3], duration: 210 },
                            { value: [0.2, -0.2], duration: 210 },
                            { value: [0.1, -0.1], duration: 210 },
                            { value: [0, -0], duration: 210 }
                        ],
                        easing: 'easeInOutCirc',
                        delay: 550
                    });
                    anime(animations[count]);
                    plate.attributes[0].value++;
                }
            });

        }
    }

}

angular.module("App").directive("animeDirective", animeDirective);