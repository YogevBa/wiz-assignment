export const data = [
    {
        policyName: 'Security Policy 1', Id: 0, adminGroups: [
            {
                name: 'US Admins', admins: [
                    { name: 'Eyal Wiener', recentAction: 'Approved a year ago', isVoted: true },
                    { name: 'Jason Levi', recentAction: 'Rejected a year ago', isVoted: true }
                ]
            },
            {
                name: 'Tel-Aviv Admins', admins: [
                    { name: 'Scorpion', recentAction: 'Approved a year ago', isVoted: true },
                    { name: 'SubZero', recentAction: 'Rejected a year ago', isVoted: false },
                    { name: 'Bruce Wayne', recentAction: 'Rejected a year ago', isVoted: false }
                ]
            }
        ],
    },
    {
        policyName: 'Security Policy 2', Id: 1, adminGroups: [
            {
                name: 'London Admins', admins: [
                    { name: 'Yogev Betito', recentAction: 'Approved a year ago', isVoted: true },
                    { name: 'Mrs Robinson', recentAction: 'Rejected a year ago', isVoted: false },
                ]
            },
            {
                name: 'Haifa Admins', admins: [
                    { name: 'Shimon Peres', recentAction: 'Approved a year ago', isVoted: true },
                    { name: 'Michael Jordan', recentAction: 'Rejected a year ago', isVoted: false },
                    { name: 'Shimi Tavori', recentAction: 'Rejected a year ago', isVoted: false }
                ]
            }
        ]
    }
]


export const policyGroupsData = [
    { policyName: 'Security Policy 1', id: 0 },
    { policyName: 'Security Policy 2', id: 1 }

]