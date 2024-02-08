export const LoadingState = () => {
    return (
        <div class="animate-spin flex justify-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 256 256" fill="none" id="my-svg">
                <defs>
                    <linearGradient id="gradient1">
                        <stop class="stop1" offset="0%" stop-color="#8f66ff"></stop>
                        <stop class="stop2" offset="100%" stop-color="#3d12ff"></stop>
                    </linearGradient>
                </defs>
                <rect id="backgr" width="256" height="256" fill="none" rx="60"></rect>
                <path d="M213.333 128c0 7.36 -0.928 14.507 -2.688 21.333M128 213.333c-7.36 0 -14.507 -0.928 -21.333 -2.688M42.667 128c0 -7.36 0.939 -14.507 2.688 -21.333M128 42.667c7.36 0 14.507 0.928 21.333 2.688M67.733 67.595A85.675 85.675 0 0 0 54.08 85.333m134.325 102.933A85.675 85.675 0 0 0 201.92 170.667M67.733 188.405c5.227 5.227 11.147 9.781 17.6 13.515m102.944 -134.325A85.632 85.632 0 0 0 170.667 54.08m-85.333 0a84.8 84.8 0 0 1 21.333 -8.725M45.355 149.333c1.952 7.573 4.907 14.731 8.725 21.333M149.333 210.645a84.8 84.8 0 0 0 21.333 -8.725M210.645 106.667a84.832 84.832 0 0 0 -8.725 -21.333" stroke="#fcfcfc" stroke-width="14" stroke-linecap="round" id="my-path" transform="translate(0,0) scale(1)"></path>
            </svg>
        </div>
    );
}