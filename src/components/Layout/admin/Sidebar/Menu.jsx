import { HelpCenter } from '@mui/icons-material';
import { Home, Airplay, Box, FolderPlus, Command, Cloud, BarChart, Users, ShoppingBag, List, Mail, MessageCircle, GitPullRequest, Monitor, Heart, Clock, Zap, CheckSquare, Calendar, Image, HelpCircle, Radio, Map, Edit, Sunrise, Package, Sliders, Layout, Server, Database, Search, File, Layers, UserCheck } from 'react-feather';

export const MENUITEMS = [
    {
        menutitle: 'Dashboard',
        menucontent: 'Dashboards,Widgets',

        
        Items: [

            
            {
                path: `/admin/users`, title: 'Users', icon: Users, type: 'sub', active: false,
            },
            
        ]
    },

];