'use strict';

function addSummerMode() {

    function applySummer(enabled) {

        const pageWrapper = document.getElementById('page_wrapper'); // getElementById
        const mainSlider = document.querySelector('.main_slider_holder'); // querySelector
        const newsBox = document.querySelector('.news_box'); // querySelector
        const header = document.querySelector('header'); // querySelector
        const footer = document.querySelector('footer'); // querySelector
        const buttons = document.querySelectorAll('button'); // querySelectorAll
        const inputs = document.querySelectorAll('input'); // querySelectorAll

        function buttonHoverIn() {
            this.style.backgroundColor = '#e65100';
        }

        function buttonHoverOut() {
            const currentBg = getComputedStyle(pageWrapper).backgroundColor;
            if (currentBg === 'rgb(255, 249, 196)') {
                this.style.backgroundColor = '#ff6d00';
            } else {
                this.style.backgroundColor = '';
            }
        }

        if (!pageWrapper) return;

        if (!enabled) {
            pageWrapper.style.backgroundColor = '';
            pageWrapper.style.color = '';
            pageWrapper.style.fontSize = '';

            if (header) { header.style.backgroundColor = ''; header.style.color = ''; }
            if (footer) { footer.style.backgroundColor = ''; footer.style.color = ''; }
            if (mainSlider) mainSlider.style.backgroundColor = '#eee';
            if (newsBox) newsBox.style.backgroundColor = '#eee';

            buttons.forEach(btn => {
                btn.style.backgroundColor = '';
                btn.style.color = '';
                btn.style.border = '';
                btn.removeEventListener('mouseover', buttonHoverIn);
                btn.removeEventListener('mouseout', buttonHoverOut);
            });

            inputs.forEach(input => {
                input.style.backgroundColor = '';
                input.style.border = '';
                input.style.color = '';
            });

            if (newsBox && newsBox.children.length) {
                Array.from(newsBox.children).forEach(child => {
                    child.style.padding = '';
                    child.style.marginBottom = '';
                    child.style.border = '';
                    child.style.borderRadius = '';
                });
            }

        } else {
            pageWrapper.style.backgroundColor = '#fff9c4';
            pageWrapper.style.color = '#333';

            if (header) { header.style.backgroundColor = '#ff6d00'; header.style.color = '#fff'; }
            if (footer) { footer.style.backgroundColor = '#ff6d00'; footer.style.color = '#fff'; }
            if (mainSlider) mainSlider.style.backgroundColor = '#fff9c4';
            if (newsBox) newsBox.style.backgroundColor = '#fff9c4';

            buttons.forEach(btn => {
                btn.style.backgroundColor = '#ff6d00';
                btn.style.color = '#fff';
                btn.style.border = 'none';
                btn.addEventListener('mouseover', buttonHoverIn);
                btn.addEventListener('mouseout', buttonHoverOut);
            });

            inputs.forEach(input => {
                input.style.backgroundColor = '#fff';
                input.style.border = '1px solid #ff6d00';
                input.style.color = '#333';
            });
            const highlightedItems = document.querySelectorAll(
                '.news_box .news_item.news_item--highlight, .main_slider_holder .slide.active'
            );
            highlightedItems.forEach(item => {
                item.style.border = '2px solid #ff6d00';
                item.style.borderRadius = '4px';
                item.style.padding = '6px';
            });

            if (newsBox && newsBox.children.length) {
                Array.from(newsBox.children).slice(0, 3).forEach(child => {
                    child.style.padding = '8px';
                    child.style.marginBottom = '6px';
                    child.style.border = '1px solid #ffbb80';
                    child.style.borderRadius = '4px';
                });
            }
            const toggleButton = document.getElementById('summer-btn');
            if (toggleButton && toggleButton.parentElement) {
                toggleButton.parentElement.style.transition = 'all 0.3s';
                toggleButton.parentElement.style.backgroundColor = 'rgba(255, 222, 173, 0.2)';
                setTimeout(() => {
                    toggleButton.parentElement.style.backgroundColor = '';
                }, 400);
            }
        }
    }

    function createButton() {
        if (document.getElementById('summer-btn')) return;

        const buttonContainer = document.querySelector('.box_links');
        if (!buttonContainer) return;

        const button = document.createElement('div');
        button.id = 'summer-btn';
        button.textContent = '☀️';
        button.title = 'Переключить режим';
        button.style.cssText = `
            width: 30px;
            height: 30px;
            background-color: #ff6d00;
            color: #fff;
            cursor: pointer;
            text-align: center;
            line-height: 30px;
            font-size: 18px;
            float: left;
            margin-left: 6px;
            border-radius: 4px;
        `;
        let saved = localStorage.getItem('kai_summer');
        let enabled = saved === '1';
        applySummer(enabled);
        button.title = enabled ? 'Летний режим включён' : 'Летний режим выключен';
        button.addEventListener('click', () => {
            enabled = !enabled;
            localStorage.setItem('kai_summer', enabled ? '1' : '0');
            applySummer(enabled);
            button.title = enabled ? 'Летний режим включён' : 'Летний режим выключен';
        });

        buttonContainer.appendChild(button);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', createButton);
    } else {
        createButton();
    }
}

addSummerMode();
