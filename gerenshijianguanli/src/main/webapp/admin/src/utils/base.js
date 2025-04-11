const base = {
    get() {
        return {
            url : "http://localhost:8080/gerenshijianguanli/",
            name: "gerenshijianguanli",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/gerenshijianguanli/front/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "个人时间管理系统"
        } 
    }
}
export default base
