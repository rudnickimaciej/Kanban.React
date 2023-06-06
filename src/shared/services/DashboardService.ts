import { Dashboard } from "../interfaces/Task";

function GetDashboard(): Dashboard  {

    return {
        columns:[
            {
                title:"To do",
                id:"column1_id",
                tasks:
                [
                    {
                        title:"1.Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore",
                        id:"task1_id"
                    },
                    {
                        title:"2.But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system",
                        id:"task2_id"
                    }
                ]
            },
            {
                title:"In progress",
                id:"column2_id",
                tasks:
                [
                    {
                        title:"3.At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias exceptu",
                        id:"task3_id"
                    },
                    {
                        title:"4.On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by the charms of pleasure of the moment",
                        id:"task4_id"
                    }
                ]
            },
            {
                title:"Done",
                id:"column3_id",
                tasks:
                [
                    {
                        title:"5.these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains",
                        id:"task5_id"
                    },
                    {
                        title:"6.met, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptate",
                        id:"task6_id"
                    }
                ]
            }
        ]
    }
}


export default GetDashboard