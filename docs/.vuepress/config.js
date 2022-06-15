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
                title: '笔记',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/Notes/', '速查表'],
                ]
            },
            {
                title: '0.前置知识',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/ProGit/0.前置知识/0_1_什么是版本控制', '什么是版本控制'],
                    ['/ProGit/0.前置知识/0_2_Git是什么', 'Git是什么'],
                    ['/ProGit/0.前置知识/0_3_起步_初次运行Git前的配置', '起步_初次运行 Git 前的配置'],
                ]
            },
            {
                title: '1.基础',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/ProGit/1.基础/1_1_获取 Git 仓库', '获取 Git 仓库'],
                    ['/ProGit/1.基础/1_2_更新记录到仓库', '更新记录到仓库'],
                    ['/ProGit/1.基础/1_3_查看提交历史', '查看提交历史'],
                    ['/ProGit/1.基础/1_4_撤消操作', '撤消操作'],
                ]
            },
            {
                title: '2.分支',
                collapsable: false,
                sidebarDepth: 2,
                children: [
                    ['/ProGit/2.分支/2_1_分支简介', '分支简介'],
                    ['/ProGit/2.分支/2_2_分支的新建与合并', '分支的新建与合并'],
                    ['/ProGit/2.分支/2_3_分支管理', '分支管理'],
                    ['/ProGit/2.分支/2_4_分支开发工作流', '分支开发工作流'],
                    ['/ProGit/2.分支/2_5_远程分支', '远程分支'],
                ]
            },
        ],
    },
}