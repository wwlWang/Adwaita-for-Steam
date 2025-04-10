(() => {
    "use strict";
    /**
     * 弹窗虚化背景
     */
    function watchModalBlur() {
        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'style') {
                    const overlay = document.querySelector('.FullModalOverlay');
                    const background = overlay?.querySelector('.ModalOverlayContent.ModalOverlayBackground');

                    // 当弹窗显示时
                    if (overlay.style.display === '') {
                        setTimeout(() => {
                            background?.classList.add('active');
                        }, 10); // 小延迟确保DOM更新
                    }
                    // 当弹窗隐藏时
                    else {
                        background?.classList.remove('active');
                    }
                }
            });
        });

        // 监听弹窗容器元素
        const targetNode = document.querySelector('.FullModalOverlay');
        if (targetNode) {
            observer.observe(targetNode, {
                attributes: true,
                attributeFilter: ['style']
            });
        }
    }
    /**
     * 监听应用卡片
     */
    function watchAppCard() {
        let cards = document.querySelectorAll("._1pwP4eeP1zQD7PEgmsep0W._54PuCatl_tYG836TOs4Mv._3SNGKeQeenu7zQZ85Ug8aj._2wgFGloLUdbOVEeIYkuqTp");
        //TODO
    }
    /**
     * 初始化
     */
    function init() {
        watchModalBlur();
    }

    const id = setInterval(() => {
        const INIT_TARGET = [
            document.querySelector('.FullModalOverlay')
        ]
        const modal = INIT_TARGET.find(item => item !== null);
        if (modal !== null) {
            console.log("Init by DIV: ", modal);
            init();
            clearInterval(id);
        }
    }, 500);
})();