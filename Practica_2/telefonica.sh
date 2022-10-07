########################    ROUTER 0 TELEFONICA    ###############################
enable
configure terminal
interface gigabitEthernet 0/0
ip address 10.1.10.1 255.255.255.252 
no shutdown
exit
interface serial 0/3/0
ip address 10.1.10.1 255.255.255.252
no shutdown
exit
router eigrp 100
network 10.1.10.0 0.0.0.3
redistribute bgp 300 metric 15 150 255 255 1500 
exit
router bgp 300
network 10.1.2.0 mask 255.255.255.252
neighbor 10.1.2.1 remote-as 200
redistribute eigrp 100


########################    ROUTER 11 TELEFONICA  ###############################
enable
configure terminal
interface serial 0/2/0
ip address 10.1.10.2 255.255.255.252
no shutdown
exit
interface serial 0/3/0
ip address 10.1.11.1 255.255.255.252
no shutdown
exit
interface serial 0/3/1
ip address 10.1.12.1 255.255.255.252
no shutdown
exit
router eigrp 100
network 10.1.10.0 0.0.0.3
network 10.1.11.0 0.0.0.3
network 10.1.12.0 0.0.0.3
exit


########################    ROUTER 9 TELEFONICA  ###############################
enable
configure terminal
interface serial 0/2/0
ip address 10.1.11.2 255.255.255.252
no shutdown
exit
interface gigabitEthernet 0/1
ip address 10.1.15.1 255.255.255.252
no shutdown
exit
interface gigabitEthernet 0/0
ip address 10.1.13.1 255.255.255.252
no shutdown
exit
router rip
version 2
network 10.1.13.0
network 10.1.15.0
no auto-summary
redistribute eigrp 100 metric 15
exit
router eigrp 100
network 10.1.11.0 0.0.0.3
redistribute rip metric 15 150 255 255 1500
exit


########################    ROUTER 10 TELEFONICA  ###############################
enable
configure terminal
interface serial 0/2/0
ip address 10.1.12.2 255.255.255.252
no shutdown
exit
interface gigabitEthernet 0/1
ip address 10.1.14.1 255.255.255.252
no shutdown
exit
interface gigabitEthernet 0/0
ip address 10.1.16.1 255.255.255.252
no shutdown
exit
router rip
version 2
network 10.1.14.0
network 10.1.16.0
no auto-summary
redistribute eigrp 100 metric 15
exit
router eigrp 100
network 10.1.12.0 0.0.0.3
redistribute rip metric 15 150 255 255 1500
exit

########################    SWITCH 12 TELEFONICA  ###############################
enable
configure terminal
interface fastEthernet 0/1
no switchport
ip address 10.1.13.2 255.255.255.252
no shutdown
exit
interface fastEthernet 0/7
no switchport
ip address 10.1.14.2 255.255.255.252
no shutdown
exit
vtp domain grupo8
vtp password grupo8
vtp version 2
vtp mode server
exit
vlan 10 
name Empresarial
exit
vlan 20
name Economico 
exit
interface range fa0/5-6
channel-protocol lacp
channel-group 1 mode active
exit
interface port-channel 1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,10,20,1002-1005
exit
interface range fa0/2-4
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,10,20,1002-1005
exit
interface vlan10
ip address 192.168.88.1 255.255.255.128
no shutdown
exit
interface vlan20
ip address 192.168.88.129 255.255.255.128
no shutdown
exit
ip routing
router rip
version 2
network 10.1.13.0
network 10.1.14.0
network 192.168.88.0
network 192.168.88.128
no auto-summary
exit

# EMPRESARIAL Y ECONOMICO
access-list 1 permit 192.168.88.128 0.0.0.127 #economico
access-list 1 permit 192.168.88.0 0.0.0.127 # empresarial
access-list 1 deny 192.168.28.0 0.0.0.127 # educacion
access-list 1 deny 192.168.28.128 0.0.0.127 # cultura y deportes
access-list 1 deny 192.168.58.0 0.0.0.127 # salud
access-list 1 deny 192.168.58.128 0.0.0.127 # funcion publica

interface range f0/2-4
ip access-group 1 out

########################    SWITCH 13 TELEFONICA  ###############################
enable
configure terminal
interface fastEthernet 0/1
no switchport
ip address 10.1.16.2 255.255.255.252
no shutdown
exit
interface fastEthernet 0/7
no switchport
ip address 10.1.15.2 255.255.255.252
no shutdown
exit
vtp domain grupo8
vtp password grupo8
vtp version 2
vtp mode client
exit
interface range fa0/5-6
channel-protocol lacp
channel-group 1 mode active
exit
interface port-channel 1
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,10,20,1002-1005
exit
interface range fa0/2-4
switchport trunk encapsulation dot1q
switchport mode trunk
switchport trunk allowed vlan 1,10,20,1002-1005
exit
interface vlan10
ip address 192.168.88.1 255.255.255.128
no shutdown
exit
interface vlan20
ip address 192.168.88.129 255.255.255.128
no shutdown
exit
ip routing
router rip
version 2
network 10.1.15.0
network 10.1.16.0
network 192.168.88.0
network 192.168.88.128
no auto-summary
exit

# EMPRESARIAL Y ECONOMICO
access-list 1 permit 192.168.88.128 0.0.0.127 #economico
access-list 1 permit 192.168.88.0 0.0.0.127 # empresarial
access-list 1 deny 192.168.28.0 0.0.0.127 # educacion
access-list 1 deny 192.168.28.128 0.0.0.127 # cultura y deportes
access-list 1 deny 192.168.58.0 0.0.0.127 # salud
access-list 1 deny 192.168.58.128 0.0.0.127 # funcion publica

interface range f0/2-4
ip access-group 1 out

########################    SWITCHES TELEFONICA  ###############################
enable 
configure terminal
vtp domain grupo8
vtp password grupo8
vtp version 2
vtp mode client
exit
interface fa0/3 
switchport mode access
switchport access vlan #
exit