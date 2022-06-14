module.exports = {
    title: 'GitNotes',
    dest: './dist',
    base: '/GitNotes/',
    repo:
        'https://github.com/changhengheng/GitNotes.git',
    themeConfig: {
        lastUpdated: '上次更新',
        smoothScroll: true,
        nav: [
            {
                text: 'VuePressNotes',
                link: 'https://github.com/changhengheng/GitNotes.git',
            },
        ],
        sidebar: [
            {
                title: '0.准备工作',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/准备工作/1.安装TS', '安装TS'],
                ]
            },
        ],
    },
}