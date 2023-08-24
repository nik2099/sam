import { HelpCenter } from '@mui/icons-material';
import { Home, Airplay, Dashboard,Box, FolderPlus, Command, Cloud, BarChart, Users, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, HelpCircle, Radio, Map, Edit, Sunrise, Package, Sliders, Layout, Server, Database, Search, File, Layers, UserCheck } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'Dashboard',
        menucontent: 'Dashboards,Widgets',

        
        Items: [

            
            {
                path: `/campaigns`, title: 'Kampagnen', icon: Home, type: 'sub', active: false,
            },
            {
                path: `/MyApp`, title: 'Meine Apps', icon: Image, type: 'sub', active: false
            },
            {
                path: `/mydevice`, title: 'Meine Geräte', icon: Layout, type: 'sub', active: false
                
            },
            
            {
                path: `/result`, title: 'Result', icon: HelpCircle, type: 'sub', active: false
                
            },
            {
                path: `/player`, title: 'Player', icon: HelpCircle, type: 'sub', active: false
                
            },
        ],

        AdminMenu: [
            
            {
                path: `/admin/users`, title: 'Users', icon: Users, type: 'sub', active: false,
            },
            
        ]
    },

];