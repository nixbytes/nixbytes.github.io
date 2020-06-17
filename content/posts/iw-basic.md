---
title: "IW CLI Basic"
date: 2020-05-23
draft: true
---

# iw usage and commands

Like most network configuration, the commands have to be executed with root permissions. Executed with normal user rights, some of the commands (e.g. iw list), will exit without error but not produce the correct output either, which can be confusing.


### To get the name of your wireless interface do:

`$ iw dev`

The name of the interface will be output after the word "Interface". For example, it is commonly wlan0.
Get the status of the interface

To check link status, use following command.

`$ iw dev interface link`

You can get statistic information, such as the amount of tx/rx bytes, signal strength etc., with following command:

`$ iw dev interface station dump`

Activate the interface
Tip: Usually this step is not required.

Some cards require that the kernel interface be activated before you can use iw or wireless_tools:

### ip link set interface up

Note: If you get errors like RTNETLINK answers: Operation not possible due to RF-kill, make sure that hardware switch is on. See #Rfkill caveat for details.

To verify that the interface is up, inspect the output of the following command:

```
$ ip link show interface

3: wlan0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500 qdisc mq state DOWN mode DORMANT group default qlen 1000
    link/ether 12:34:56:78:9a:bc brd ff:ff:ff:ff:ff:ff
```
The UP in <BROADCAST,MULTICAST,UP,LOWER_UP> is what indicates the interface is up, not the later state DOWN.
Discover access points

To see what access points are available:

`iw dev interface scan | less`


The important points to check:

- SSID: the name of the network.
- Signal: is reported in a wireless power ratio in dBm (e.g. from -100 to 0). The closer the negative value gets to zero, the better the signal. Observing the reported power on a good quality link and a bad one should give an idea about the individual range.
- Security: it is not reported directly, check the line starting with capability. If there is Privacy, for example capability: ESS Privacy ShortSlotTime (0x0411), then the network is protected somehow.


You might need to set the proper operating mode of the wireless card. More specifically, if you are going to connect an ad-hoc network, you need to set the operating mode to ibss:

`iw dev interface set type ibss`

`iw dev interface connect "your_essid"`

using a hexadecimal or ASCII key (the format is distinguished automatically, because a WEP key has a fixed length):

# iw dev interface connect "your_essid" key 0:your_key

using a hexadecimal or ASCII key, specifying the third set up key as default (keys are counted from zero, four are possible):

# iw dev interface connect "your_essid" key d:2:your_key

Regardless of the method used, you can check if you have associated successfully:

```
iw dev interface link
```
