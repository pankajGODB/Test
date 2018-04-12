var sheets = ['Industry List','BHC Calculator','PBDIT Calculation','FAQ-Norms','GoDB Changes',''];
var srcs = {
	"0_1_21" : [],
	"0_1_22" : [],
	"0_2_0" : [],
	"0_2_21" : [],
	"0_2_22" : [],
	"0_3_0" : ["0_2_0",],
	"0_3_21" : [],
	"0_3_22" : [],
	"0_4_0" : ["0_3_0",],
	"0_4_21" : [],
	"0_4_22" : [],
	"0_5_0" : ["0_4_0",],
	"0_5_21" : [],
	"0_5_22" : [],
	"0_6_0" : ["0_5_0",],
	"0_6_21" : [],
	"0_6_22" : [],
	"0_7_0" : ["0_6_0",],
	"0_7_21" : [],
	"0_7_22" : [],
	"0_8_0" : ["0_7_0",],
	"0_8_21" : [],
	"0_8_22" : [],
	"0_9_0" : ["0_8_0",],
	"0_9_21" : [],
	"0_9_22" : [],
	"0_10_0" : ["0_9_0",],
	"0_10_21" : [],
	"0_10_22" : [],
	"0_11_0" : ["0_10_0",],
	"0_11_21" : [],
	"0_11_22" : [],
	"0_12_0" : ["0_11_0",],
	"0_12_21" : [],
	"0_12_22" : [],
	"0_13_0" : ["0_12_0",],
	"0_13_21" : [],
	"0_13_22" : [],
	"0_14_0" : ["0_13_0",],
	"0_14_21" : [],
	"0_14_22" : [],
	"0_15_0" : ["0_14_0",],
	"0_15_21" : [],
	"0_15_22" : [],
	"0_16_0" : ["0_15_0",],
	"0_16_21" : [],
	"0_16_22" : [],
	"0_17_0" : ["0_16_0",],
	"0_17_21" : [],
	"0_17_22" : [],
	"0_18_0" : ["0_17_0",],
	"0_18_21" : [],
	"0_18_22" : [],
	"0_19_0" : ["0_18_0",],
	"0_19_21" : [],
	"0_19_22" : [],
	"0_20_0" : ["0_19_0",],
	"0_20_21" : [],
	"0_20_22" : [],
	"0_21_0" : ["0_20_0",],
	"0_21_21" : [],
	"0_21_22" : [],
	"0_22_0" : ["0_21_0",],
	"0_22_21" : [],
	"0_22_22" : [],
	"0_23_0" : ["0_22_0",],
	"0_23_21" : [],
	"0_23_22" : [],
	"0_24_0" : ["0_23_0",],
	"0_24_21" : [],
	"0_24_22" : [],
	"0_25_0" : ["0_24_0",],
	"0_25_21" : [],
	"0_25_22" : [],
	"0_26_0" : ["0_25_0",],
	"0_26_21" : [],
	"0_26_22" : [],
	"0_27_0" : ["0_26_0",],
	"0_27_21" : [],
	"0_27_22" : [],
	"0_28_0" : ["0_27_0",],
	"0_28_21" : [],
	"0_28_22" : [],
	"0_29_0" : ["0_28_0",],
	"0_29_21" : [],
	"0_29_22" : [],
	"0_30_0" : ["0_29_0",],
	"0_30_21" : [],
	"0_30_22" : [],
	"0_31_0" : ["0_30_0",],
	"0_31_21" : [],
	"0_31_22" : [],
	"0_32_0" : ["0_31_0",],
	"0_32_21" : [],
	"0_32_22" : [],
	"0_33_0" : ["0_32_0",],
	"0_33_21" : [],
	"0_33_22" : [],
	"0_34_0" : ["0_33_0",],
	"0_34_21" : [],
	"0_34_22" : [],
	"0_35_0" : ["0_34_0",],
	"0_35_21" : [],
	"0_35_22" : [],
	"0_36_0" : ["0_35_0",],
	"0_36_21" : [],
	"0_36_22" : [],
	"0_37_0" : ["0_36_0",],
	"0_37_21" : [],
	"0_37_22" : [],
	"0_38_0" : ["0_37_0",],
	"0_38_21" : [],
	"0_38_22" : [],
	"0_39_0" : ["0_38_0",],
	"0_39_21" : [],
	"0_39_22" : [],
	"0_40_0" : ["0_39_0",],
	"0_40_21" : [],
	"0_40_22" : [],
	"0_41_0" : ["0_40_0",],
	"0_41_21" : [],
	"0_41_22" : [],
	"0_42_0" : ["0_41_0",],
	"0_42_21" : [],
	"0_42_22" : [],
	"0_43_0" : ["0_42_0",],
	"0_43_21" : [],
	"0_43_22" : [],
	"0_44_0" : ["0_43_0",],
	"0_44_21" : [],
	"0_44_22" : [],
	"0_45_0" : ["0_44_0",],
	"0_45_21" : [],
	"0_45_22" : [],
	"0_46_0" : ["0_45_0",],
	"0_46_21" : [],
	"0_46_22" : [],
	"0_47_0" : ["0_46_0",],
	"0_47_21" : [],
	"0_47_22" : [],
	"0_48_0" : ["0_47_0",],
	"0_48_21" : [],
	"0_48_22" : [],
	"0_49_0" : ["0_48_0",],
	"0_49_21" : [],
	"0_49_22" : [],
	"0_50_0" : ["0_49_0",],
	"0_50_21" : [],
	"0_50_22" : [],
	"0_51_0" : ["0_50_0",],
	"0_51_21" : [],
	"0_51_22" : [],
	"0_52_0" : ["0_51_0",],
	"0_52_21" : [],
	"0_52_22" : [],
	"0_53_0" : ["0_52_0",],
	"0_53_21" : [],
	"0_53_22" : [],
	"0_54_0" : ["0_53_0",],
	"0_54_21" : [],
	"0_54_22" : [],
	"0_55_0" : ["0_54_0",],
	"0_55_21" : [],
	"0_55_22" : [],
	"0_56_0" : ["0_55_0",],
	"0_56_21" : [],
	"0_56_22" : [],
	"0_57_0" : ["0_56_0",],
	"0_57_21" : [],
	"0_57_22" : [],
	"0_58_0" : ["0_57_0",],
	"0_58_21" : [],
	"0_58_22" : [],
	"0_59_0" : ["0_58_0",],
	"0_59_21" : [],
	"0_59_22" : [],
	"0_60_0" : ["0_59_0",],
	"0_60_21" : [],
	"0_60_22" : [],
	"0_61_0" : ["0_60_0",],
	"0_61_21" : [],
	"0_61_22" : [],
	"0_62_0" : ["0_61_0",],
	"0_62_21" : [],
	"0_62_22" : [],
	"0_63_0" : ["0_62_0",],
	"0_63_21" : [],
	"0_63_22" : [],
	"0_64_0" : ["0_63_0",],
	"0_64_21" : [],
	"0_64_22" : [],
	"0_65_0" : ["0_64_0",],
	"0_65_21" : [],
	"0_65_22" : [],
	"0_66_0" : ["0_65_0",],
	"0_66_21" : [],
	"0_66_22" : [],
	"0_67_0" : ["0_66_0",],
	"0_67_21" : [],
	"0_67_22" : [],
	"0_68_0" : ["0_67_0",],
	"0_68_21" : [],
	"0_68_22" : [],
	"0_69_0" : ["0_68_0",],
	"0_69_21" : [],
	"0_69_22" : [],
	"0_70_0" : ["0_69_0",],
	"0_70_21" : [],
	"0_70_22" : [],
	"0_71_0" : ["0_70_0",],
	"0_71_21" : [],
	"0_71_22" : [],
	"0_72_0" : ["0_71_0",],
	"0_72_21" : [],
	"0_72_22" : [],
	"0_73_0" : ["0_72_0",],
	"0_73_21" : [],
	"0_73_22" : [],
	"0_74_0" : ["0_73_0",],
	"0_74_21" : [],
	"0_74_22" : [],
	"0_75_0" : ["0_74_0",],
	"0_75_21" : [],
	"0_75_22" : [],
	"0_76_0" : ["0_75_0",],
	"0_76_21" : [],
	"0_76_22" : [],
	"0_77_0" : ["0_76_0",],
	"0_77_21" : [],
	"0_77_22" : [],
	"0_78_0" : ["0_77_0",],
	"0_78_21" : [],
	"0_78_22" : [],
	"0_79_0" : ["0_78_0",],
	"0_79_21" : [],
	"0_79_22" : [],
	"0_80_0" : ["0_79_0",],
	"0_80_21" : [],
	"0_80_22" : [],
	"0_81_0" : ["0_80_0",],
	"0_81_21" : [],
	"0_81_22" : [],
	"0_82_0" : ["0_81_0",],
	"0_82_21" : [],
	"0_82_22" : [],
	"0_83_0" : ["0_82_0",],
	"0_83_21" : [],
	"0_83_22" : [],
	"0_84_0" : ["0_83_0",],
	"0_84_21" : [],
	"0_84_22" : [],
	"0_85_0" : ["0_84_0",],
	"0_85_21" : [],
	"0_85_22" : [],
	"0_86_0" : ["0_85_0",],
	"0_86_21" : [],
	"0_86_22" : [],
	"0_87_0" : ["0_86_0",],
	"0_87_21" : [],
	"0_87_22" : [],
	"0_88_0" : ["0_87_0",],
	"0_88_21" : [],
	"0_88_22" : [],
	"0_89_0" : ["0_88_0",],
	"0_89_21" : [],
	"0_89_22" : [],
	"0_90_0" : ["0_89_0",],
	"0_90_21" : [],
	"0_90_22" : [],
	"0_91_0" : ["0_90_0",],
	"0_91_21" : [],
	"0_91_22" : [],
	"0_92_0" : ["0_91_0",],
	"0_92_21" : [],
	"0_92_22" : [],
	"0_93_0" : ["0_92_0",],
	"0_93_21" : [],
	"0_93_22" : [],
	"0_94_0" : ["0_93_0",],
	"0_94_21" : [],
	"0_94_22" : [],
	"0_95_0" : ["0_94_0",],
	"0_95_21" : [],
	"0_95_22" : [],
	"0_96_0" : ["0_95_0",],
	"0_96_21" : [],
	"0_96_22" : [],
	"0_97_0" : ["0_96_0",],
	"0_97_21" : [],
	"0_97_22" : [],
	"0_98_0" : ["0_97_0",],
	"0_98_21" : [],
	"0_98_22" : [],
	"0_99_0" : ["0_98_0",],
	"0_99_21" : [],
	"0_99_22" : [],
	"0_100_0" : ["0_99_0",],
	"0_100_21" : [],
	"0_100_22" : [],
	"0_101_0" : ["0_100_0",],
	"0_101_21" : [],
	"0_101_22" : [],
	"0_102_0" : ["0_101_0",],
	"0_102_21" : [],
	"0_102_22" : [],
	"0_103_0" : ["0_102_0",],
	"0_103_21" : [],
	"0_103_22" : [],
	"0_104_0" : ["0_103_0",],
	"0_104_21" : [],
	"0_104_22" : [],
	"0_105_0" : ["0_104_0",],
	"0_105_21" : [],
	"0_105_22" : [],
	"0_106_0" : ["0_105_0",],
	"0_106_21" : [],
	"0_106_22" : [],
	"0_107_0" : ["0_106_0",],
	"0_107_21" : [],
	"0_107_22" : [],
	"0_108_0" : ["0_107_0",],
	"0_108_21" : [],
	"0_108_22" : [],
	"0_109_0" : ["0_108_0",],
	"0_109_21" : [],
	"0_109_22" : [],
	"0_110_0" : ["0_109_0",],
	"0_110_21" : [],
	"0_110_22" : [],
	"0_111_0" : ["0_110_0",],
	"0_111_21" : [],
	"0_111_22" : [],
	"0_112_0" : ["0_111_0",],
	"0_112_21" : [],
	"0_112_22" : [],
	"0_113_0" : ["0_112_0",],
	"0_113_21" : [],
	"0_113_22" : [],
	"0_114_0" : ["0_113_0",],
	"0_114_21" : [],
	"0_114_22" : [],
	"0_115_0" : ["0_114_0",],
	"0_115_21" : [],
	"0_115_22" : [],
	"0_116_0" : ["0_115_0",],
	"0_116_21" : [],
	"0_116_22" : [],
	"0_117_0" : ["0_116_0",],
	"0_117_21" : [],
	"0_117_22" : [],
	"0_118_0" : ["0_117_0",],
	"0_118_21" : [],
	"0_118_22" : [],
	"0_119_0" : ["0_118_0",],
	"0_119_21" : [],
	"0_119_22" : [],
	"0_120_0" : ["0_119_0",],
	"0_120_21" : [],
	"0_120_22" : [],
	"0_121_0" : ["0_120_0",],
	"0_121_21" : [],
	"0_121_22" : [],
	"0_122_0" : ["0_121_0",],
	"0_122_21" : [],
	"0_122_22" : [],
	"0_123_0" : ["0_122_0",],
	"0_123_21" : [],
	"0_123_22" : [],
	"0_124_0" : ["0_123_0",],
	"0_124_21" : [],
	"0_124_22" : [],
	"0_125_0" : ["0_124_0",],
	"0_125_21" : [],
	"0_125_22" : [],
	"0_126_0" : ["0_125_0",],
	"0_126_21" : [],
	"0_126_22" : [],
	"0_127_0" : ["0_126_0",],
	"0_127_21" : [],
	"0_127_22" : [],
	"0_128_0" : ["0_127_0",],
	"0_128_21" : [],
	"0_128_22" : [],
	"0_129_0" : ["0_128_0",],
	"0_129_21" : [],
	"0_129_22" : [],
	"0_130_0" : ["0_129_0",],
	"0_130_21" : [],
	"0_130_22" : [],
	"0_131_0" : ["0_130_0",],
	"0_131_21" : [],
	"0_131_22" : [],
	"0_132_0" : ["0_131_0",],
	"0_132_21" : [],
	"0_132_22" : [],
	"0_133_0" : ["0_132_0",],
	"0_133_21" : [],
	"0_133_22" : [],
	"0_134_0" : ["0_133_0",],
	"0_134_21" : [],
	"0_134_22" : [],
	"0_135_0" : ["0_134_0",],
	"0_135_21" : [],
	"0_135_22" : [],
	"0_136_0" : ["0_135_0",],
	"0_136_21" : [],
	"0_136_22" : [],
	"0_137_0" : ["0_136_0",],
	"0_137_21" : [],
	"0_137_22" : [],
	"0_138_0" : ["0_137_0",],
	"0_138_21" : [],
	"0_138_22" : [],
	"0_139_0" : ["0_138_0",],
	"0_139_21" : [],
	"0_139_22" : [],
	"0_140_0" : ["0_139_0",],
	"0_140_21" : [],
	"0_140_22" : [],
	"0_141_0" : ["0_140_0",],
	"0_141_21" : [],
	"0_141_22" : [],
	"0_142_0" : ["0_141_0",],
	"0_142_21" : [],
	"0_142_22" : [],
	"0_143_0" : ["0_142_0",],
	"0_143_21" : [],
	"0_143_22" : [],
	"0_144_0" : ["0_143_0",],
	"0_144_21" : [],
	"0_144_22" : [],
	"0_145_0" : ["0_144_0",],
	"0_145_21" : [],
	"0_145_22" : [],
	"0_146_0" : ["0_145_0",],
	"0_146_21" : [],
	"0_146_22" : [],
	"0_147_0" : ["0_146_0",],
	"0_147_21" : [],
	"0_147_22" : [],
	"0_148_0" : ["0_147_0",],
	"0_148_21" : [],
	"0_148_22" : [],
	"0_149_0" : ["0_148_0",],
	"0_149_21" : [],
	"0_149_22" : [],
	"0_150_0" : ["0_149_0",],
	"0_150_21" : [],
	"0_150_22" : [],
	"0_151_0" : ["0_150_0",],
	"0_151_21" : [],
	"0_151_22" : [],
	"0_152_0" : ["0_151_0",],
	"0_152_21" : [],
	"0_152_22" : [],
	"0_153_0" : ["0_152_0",],
	"0_153_21" : [],
	"0_153_22" : [],
	"0_154_0" : ["0_153_0",],
	"0_154_21" : [],
	"0_154_22" : [],
	"0_155_0" : ["0_154_0",],
	"0_155_21" : [],
	"0_155_22" : [],
	"0_156_0" : ["0_155_0",],
	"0_156_21" : [],
	"0_156_22" : [],
	"0_157_0" : ["0_156_0",],
	"0_157_21" : [],
	"0_157_22" : [],
	"0_158_0" : ["0_157_0",],
	"0_158_21" : [],
	"0_158_22" : [],
	"0_159_0" : ["0_158_0",],
	"0_159_21" : [],
	"0_159_22" : [],
	"0_160_0" : ["0_159_0",],
	"0_160_21" : [],
	"0_160_22" : [],
	"0_161_0" : ["0_160_0",],
	"0_161_21" : [],
	"0_161_22" : [],
	"0_162_0" : ["0_161_0",],
	"0_162_21" : [],
	"0_162_22" : [],
	"0_163_0" : ["0_162_0",],
	"0_163_21" : [],
	"0_163_22" : [],
	"0_164_0" : ["0_163_0",],
	"0_164_21" : [],
	"0_164_22" : [],
	"0_165_0" : ["0_164_0",],
	"0_165_21" : [],
	"0_165_22" : [],
	"0_166_0" : ["0_165_0",],
	"0_166_21" : [],
	"0_166_22" : [],
	"0_167_0" : ["0_166_0",],
	"0_167_21" : [],
	"0_167_22" : [],
	"0_168_0" : ["0_167_0",],
	"0_168_21" : [],
	"0_168_22" : [],
	"0_169_0" : ["0_168_0",],
	"0_169_21" : [],
	"0_169_22" : [],
	"0_170_0" : ["0_169_0",],
	"0_170_21" : [],
	"0_170_22" : [],
	"0_171_0" : ["0_170_0",],
	"0_171_21" : [],
	"0_171_22" : [],
	"0_172_0" : ["0_171_0",],
	"0_172_21" : [],
	"0_172_22" : [],
	"0_173_0" : ["0_172_0",],
	"0_173_21" : [],
	"0_173_22" : [],
	"0_174_0" : ["0_173_0",],
	"0_174_21" : [],
	"0_174_22" : [],
	"0_175_0" : ["0_174_0",],
	"0_175_21" : [],
	"0_175_22" : [],
	"0_176_0" : ["0_175_0",],
	"0_176_21" : [],
	"0_176_22" : [],
	"0_177_0" : ["0_176_0",],
	"0_177_21" : [],
	"0_177_22" : [],
	"0_178_0" : ["0_177_0",],
	"0_178_21" : [],
	"0_178_22" : [],
	"0_179_0" : ["0_178_0",],
	"0_179_21" : [],
	"0_179_22" : [],
	"1_5_25" : ["1_9_3",{ s:1,sr:7,sc:45,er:61,ec:46},],
	"1_6_3" : [{ s:1,sr:3,sc:33,er:31,ec:33},],
	"1_6_4" : [{ s:1,sr:3,sc:33,er:31,ec:33},],
	"1_6_25" : ["1_6_3","1_7_3",{ s:0,sr:1,sc:21,er:234,ec:22},],
	"1_7_3" : ["1_6_3",],
	"1_7_4" : ["1_6_3",],
	"1_7_25" : [],
	"1_8_3" : [{ s:1,sr:10,sc:22,er:10,ec:25},],
	"1_8_4" : [{ s:1,sr:10,sc:22,er:10,ec:25},],
	"1_8_25" : ["1_19_3",],
	"1_9_3" : [{ s:1,sr:8,sc:45,er:95,ec:45},],
	"1_9_4" : [{ s:1,sr:8,sc:45,er:95,ec:45},],
	"1_26_3" : ["2_11_1",],
	"1_30_1" : ["1_6_25",],
	"1_31_13" : ["1_6_25",],
	"1_31_14" : ["1_31_13",],
	"1_31_16" : ["1_31_13",],
	"1_31_19" : ["1_31_16",],
	"1_32_2" : [],
	"1_32_13" : ["1_10_3",],
	"1_32_14" : ["1_32_13",],
	"1_32_16" : ["1_32_13",],
	"1_32_19" : ["1_32_16",],
	"1_33_2" : ["1_32_2",],
	"1_33_13" : ["1_11_3",],
	"1_33_14" : ["1_33_13",],
	"1_33_16" : ["1_33_13",],
	"1_33_19" : ["1_33_16",],
	"1_33_23" : ["1_19_3",],
	"1_34_2" : ["1_33_2",],
	"1_34_13" : [],
	"1_34_14" : ["1_34_13",],
	"1_35_2" : ["1_34_2",],
	"1_35_13" : [],
	"1_35_14" : ["1_35_13","1_8_3",],
	"1_36_2" : ["1_35_2",],
	"1_36_13" : [],
	"1_36_14" : ["1_36_13",],
	"1_36_16" : [],
	"1_36_19" : ["1_36_16",],
	"1_37_13" : [{ s:1,sr:31,sc:14,er:36,ec:14},],
	"1_37_16" : [{ s:1,sr:31,sc:19,er:36,ec:19},],
	"1_38_23" : [],
	"1_40_1" : ["1_7_3",{ s:0,sr:0,sc:2,er:232,ec:2},],
	"1_40_2" : ["1_8_3",{ s:0,sr:0,sc:4,er:0,ec:6},],
	"1_40_4" : [{ s:0,sr:0,sc:4,er:232,ec:6},"1_40_1","1_40_2",],
	"1_42_4" : ["1_37_13",],
	"1_42_9" : ["1_37_13",],
	"1_42_14" : ["1_37_13","1_8_3","1_5_25",],
	"1_42_19" : ["1_37_13",],
	"1_42_23" : [],
	"1_43_4" : ["1_42_4","1_40_4",],
	"1_43_9" : ["1_42_9",],
	"1_43_14" : ["1_5_25","1_42_14","1_8_3",{ s:1,sr:49,sc:27,er:51,ec:28},],
	"1_43_17" : [],
	"1_43_19" : ["1_42_19",],
	"1_44_4" : ["1_43_4","1_42_4",],
	"1_44_9" : ["1_43_9",],
	"1_44_14" : ["1_43_14","1_42_14",],
	"1_45_2" : [],
	"1_45_4" : ["1_43_4","1_44_4",],
	"1_45_9" : ["1_42_9","1_43_9","1_44_9",],
	"1_45_14" : ["1_44_14",],
	"1_45_19" : ["1_43_19",],
	"1_46_4" : ["1_43_4",],
	"1_46_7" : [],
	"1_46_9" : ["1_43_9","1_45_9",],
	"1_46_14" : ["1_44_14","1_45_14",],
	"1_46_19" : ["1_43_19",],
	"1_47_4" : ["1_43_4","1_45_4","1_46_4",],
	"1_47_9" : ["1_43_9",],
	"1_47_14" : ["1_44_14",],
	"1_47_19" : ["1_43_19",],
	"1_48_4" : ["1_43_4",],
	"1_48_9" : ["1_43_9",],
	"1_48_14" : ["1_44_14",],
	"1_48_19" : ["1_43_19","1_19_3","1_46_19","1_47_19","1_45_19",],
	"1_49_4" : ["1_43_4",],
	"1_49_9" : ["1_46_9","1_19_3","1_47_9","1_48_9",],
	"1_49_14" : ["1_44_14","1_19_3","1_47_14","1_48_14","1_46_14",],
	"1_49_19" : ["1_43_19","1_48_19",],
	"1_50_4" : ["1_43_4","1_19_3","1_48_4","1_49_4","1_47_4",],
	"1_50_9" : ["1_43_9",],
	"1_50_14" : ["1_44_14","1_49_14",],
	"1_50_19" : ["1_43_19","1_48_19",],
	"1_51_4" : ["1_43_4","1_50_4",],
	"1_51_9" : ["1_43_9",],
	"1_51_14" : ["1_44_14","1_49_14",],
	"1_51_19" : ["1_48_19","1_49_19","1_50_19",],
	"1_52_4" : ["1_43_4",],
	"1_52_9" : ["1_43_9","1_53_9","1_19_3","1_50_9","1_51_9",],
	"1_52_14" : ["1_44_14","1_19_3","1_47_14","1_48_14","1_49_14","1_50_14","1_51_14",],
	"1_53_4" : ["1_50_4","1_51_4","1_52_4",],
	"1_53_9" : ["1_46_9","1_19_3","1_47_9","1_49_9",],
	"1_53_14" : ["1_44_14","1_49_14","1_50_14","1_52_14",],
	"1_53_19" : ["1_48_19","1_49_19","1_51_19",],
	"1_54_4" : ["1_53_4","1_52_4","1_51_4",],
	"1_54_9" : ["1_53_9","1_48_9","1_47_9",],
	"1_54_14" : ["1_44_14","1_53_14","1_51_14","1_50_14",],
	"1_54_19" : ["1_53_19","1_50_19","1_49_19",],
	"1_60_19" : ["1_37_16","1_6_25",],
	"1_61_19" : ["1_60_19",],
	"1_62_19" : ["1_40_4",],
	"1_63_19" : ["1_62_19","1_26_3",],
	"1_64_19" : ["1_60_19","1_63_19","1_61_19",],
	"1_65_19" : ["1_60_19","1_64_19",],
	"1_66_19" : ["1_60_19",],
	"1_67_19" : ["1_60_19","1_65_19","1_66_19",],
	"1_68_4" : ["1_26_3",],
	"1_68_19" : ["1_60_19",],
	"1_69_4" : ["1_8_25",],
	"1_69_19" : ["1_60_19",],
	"1_70_4" : ["1_68_4","1_69_4",],
	"1_70_19" : ["1_60_19","1_19_3","1_67_19",],
	"1_71_4" : ["1_26_3",],
	"1_71_19" : ["1_60_19","1_19_3",],
	"1_72_4" : ["1_26_3",],
	"1_72_19" : ["1_60_19","1_19_3",],
	"1_73_4" : ["1_71_4","1_69_4",],
	"1_73_19" : ["1_70_19","1_71_19","1_72_19",],
	"1_74_4" : ["1_72_4","1_69_4",],
	"1_74_19" : ["1_73_19","1_72_19","1_71_19",],
	"1_75_19" : ["1_73_19","1_72_19","1_71_19",],
	"1_76_19" : ["1_73_19","1_72_19","1_71_19",],
	"1_79_29" : ["1_6_25",],
	"2_5_1" : [],
	"2_8_1" : ["2_5_1",],
	"2_10_1" : [],
	"2_11_1" : ["2_8_1","2_10_1",],
};
/* Excel formula simulator in Javascript!
 *  Portions of the Excel Jsavascript functions are reproduced from Sutoiku's formula.js library
 *  and some portions are adaptations of formula.js library. Credit's are due to the original
 *  authors.
 */

/* simplest but inefficient replaceAll */
String.prototype.replaceAll = function(search, replace)
{
    return this.split(search).join(replace);
};

function updateListValidations(id, formula1, formula2){
    _g.fieldValidations(id, formula1);

    /*
    var elem;
    if( !_g.dcache.hasOwnProperty(id) ){
        elem = document.getElementById(id);
        _g.dcache[id] = elem;
    }
    if( !(elem=_g.dcache[id]) )return;

    elem = $(elem);
    if( formula1 != null ){
        _g.fieldValidations(elem, formula1);
    }*/
    //if( formula2 != null ){
    //    _g.fieldValidations($(elem), formula2);
    //}
}



var FALSE = 0;
var TRUE  = 1;
var WEEK_STARTS = [undefined, 0, 1,undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, 1, 2, 3, 4, 5, 6, 0 ];

var WEEK_TYPES = [
  [],
  [1, 2, 3, 4, 5, 6, 7],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 0, 1, 2, 3, 4, 5],
  [],
  [],
  [],
  [],
  [],
  [],
  [],
  [7, 1, 2, 3, 4, 5, 6],
  [6, 7, 1, 2, 3, 4, 5],
  [5, 6, 7, 1, 2, 3, 4],
  [4, 5, 6, 7, 1, 2, 3],
  [3, 4, 5, 6, 7, 1, 2],
  [2, 3, 4, 5, 6, 7, 1],
  [1, 2, 3, 4, 5, 6, 7]
];
var WEEKEND_TYPES = [
  [],
  [6, 0],
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [4, 5],
  [5, 6],
  undefined,
  undefined,
  undefined, [0, 0],
  [1, 1],
  [2, 2],
  [3, 3],
  [4, 4],
  [5, 5],
  [6, 6]
];






/* global functions */

function isNumber(obj){
    return !isNaN(parseFloat(obj)) && isFinite(obj) ;
}

var d1900 = new Date(1900, 0, 1);
(function(){

    var _g = function(){
    };

    this._g = _g;
    _g.error = {
        nil  : '#NULL!',
        div0 : '#DIV/0',
        value: '#VALUE?',
        ref  : '#REF!',
        name : '#NAME?',
        num  : '#NUM!',
        error: '#ERROR!',
		na   : '#N/A'
    };

    _g.states = {};
    _g.dcache = {};
    _g.lists  = {};
    _g.listVals  = {};

    /*
     * parses time of the form h:mm:ss am/pm and returns a date object
     */
    _g.parseTime = function(stime){

        if (stime == '' || typeof stime !== 'string' )
            return _g.error.value;

        var time = stime.match(/(\d+)(:(\d\d))?\s*(p?)/i);
        if (time == null)return _g.error.value;

        var hours = parseInt(time[1],10);
        if (hours == 12 && !time[4]) {
            hours = 0;
        }
        else {
            hours += (hours < 12 && time[4])? 12 : 0;
        }
        var d = new Date();
        d.setHours(hours);
        d.setMinutes(parseInt(time[3],10) || 0);
        d.setSeconds(0, 0);
        return d;
    };

    _g.parseDate = function(date) {

        if( isNumber(date) ){

            /* excel time is of the format .nnn */
            if( +date < 1 ){
                return +date;
            }

            /* if the date is in unix timestamp format directly use it
            * excel date time format max (year 9999) is 2958446
            */
            if( +date > 2958446 ){
                return new Date(+date);
            }
			
			if( date % 1 !== 0 ){	//date with time float with decimal values
				
				var d = date|0;
				var h = (date - d)*24;
				var m = (h - (h|0))*60;
				var s = (m - (m|0))*60;
				
				var dd;
				if( d>60 )dd = new Date(d1900.getTime() + (d - 2) * 86400000);
				else dd = new Date(d1900.getTime() + (d - 1) * 86400000);
				
				dd.setHours( h|0 );
				dd.setMinutes( m|0 );
				dd.setSeconds( Math.floor(s+0.5)|0 );
				return dd;
			}
			
        }

        if (!isNaN(date)) {

            /* if its already a date object, just use it */
            if (date instanceof Date)return new Date(date);

            /* if its number of days (serial date) since 1900, constrcut
                new date object from 1900 and add days to it */
			
            var d = parseInt(date, 10);
            if (d < 0)return _g.error.value;
            if (d <= 60) {
                return new Date(d1900.getTime() + (d - 1) * 86400000);
            }
            return new Date(d1900.getTime() + (d - 2) * 86400000);
        }

        /* if its a string representation of date try to parse it */
        if (typeof date === 'string') {
            dt = new Date(date);
            if (!isNaN(dt))return dt;

            /* check if the provided value is time (alone)*/
            return _g.parseTime(date);
        }

        /* oops */
        return _g.error.value;
    };

    /* convert boolean from TRUE, false, "false", 1 0 etc to
        proper boolean var
    */
    _g.parseBool = function(bool) {
        if( typeof bool === 'boolean')return bool;

        if( _g.ISERROR(bool) )return bool;

        if (typeof bool === 'number')return bool !== 0;

        if (typeof bool === 'string'){
            var up = bool.toUpperCase();
            if (up === 'TRUE')return true;
            if (up === 'FALSE')return false;
        }

        if( bool instanceof Date && !isNaN(bool))return true;

        return _g.error.value;
    };

    _g.parseNumber = function(string) {
        if( string === undefined || string === '') {
            return _g.error.value;
        }
		if( string instanceof Date ){
			return string.getTime();
		}
        if (!isNaN(string)) {
            return parseFloat(string);
        }
        return _g.error.value;
    };

	_g.fixTables = function(){
		for(var i=0; i<arguments.length; i++ ){
			if( arguments[i] == undefined )continue;
			if( typeof arguments[i] == 'object' ){
				arguments[i].row    = +arguments[i].row|0;
				arguments[i].rowEnd = +arguments[i].rowEnd|0;
				arguments[i].col    = +arguments[i].col|0;
				arguments[i].colEnd = +arguments[i].colEnd|0;
			}
		}
	}

	_g.numToString = function(num){
		if( typeof num === 'number' )
			return ""+Number(num.toFixed(5));
		return ""+num;
	}

    _g.validDate = function(d) {
        return d && d.getTime && !isNaN(d.getTime());
    }

    _g.ensureDate = function(d) {
        return (d instanceof Date)?d:new Date(d);
    };

    _g.check = function(){
        for(var i=0; i<arguments.length; i++ ){
            if( arguments[i] == _g.error.value )return false;
        }
        return true;
    }

	_g.criteria = function(criteria, val){
        if( criteria==undefined || criteria == null )return false;
		
		if( typeof val == "string") val = "'"+val+"'";
        if( typeof criteria != "string"){
            criteria = "=="+criteria;
        }
        else{
            var code = criteria.charAt(0);
            if( code != '<' && code != '>' && code != '=' && code != '!' )criteria = "=='"+criteria+"'";
            if( code=='=' && criteria.charAt(1)!='=' )criteria = "='"+criteria+"'";
        }
        if( eval(val + criteria)) return true;
        return false;
    };


    _g.num = function(n){
        return _g.parseNumber(n);
    };

    _g.ABS = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.abs(number);
    };

    _g.ACOS = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.acos(number);
    };
    _g.COS = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.cos(number);
    };

    _g.ACOSH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.log(number + Math.sqrt(number * number - 1));
    };

    _g.ASIN = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.asin(number);
    };
    _g.SIN = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.sin(number);
    };
    _g.SINH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.sinh(number);
    };

    _g.ASINH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.log(number + Math.sqrt(number * number + 1));
    };

    _g.ATAN = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.atan(number);
    };

    _g.ATAN2 = function(number1, number2) {
        if( (number1=_g.parseNumber(number1)) == _g.error.value )return number1;
		if( (number2=_g.parseNumber(number2)) == _g.error.value )return number2;
        return Math.atan2(number1, number2);
    };
    _g.ATANH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.log((1 + number) / (1 - number)) / 2;
    };
    _g.TANH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.tanh(number);
    };

	_g.ACOT = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return Math.atan(1/number);
    };

    _g.ACOTH = function(number) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return number;
        return 0.5 * Math.log((number + 1) / (number - 1));
    };
	
	_g.BASE = function(number, radix, min_length) {
		min_length  = min_length || 0;
		number	    = _g.parseNumber(number);
		radix	    = _g.parseNumber(radix);
		min_length  = _g.parseNumber(min_length);

		if( !_g.check(number, radix, min_length))
		    return _g.error.value;

		var result = number.toString(radix);
		return new Array(Math.max(min_length + 1 - result.length, 0)).join('0') + result;
	};

	_g.CEILING = function(number, significance, mode) {
		significance = (significance === undefined) ? 1 : Math.abs(significance);
		mode = mode || 0;
		number		= _g.parseNumber(number);
		significance= _g.parseNumber(significance);
		mode		= _g.parseNumber(mode);

        if( !_g.check(number, significance, mode)) {
            return _g.error.value;
        }
		if (significance === 0) {
			return 0;
		}
		var precision = -Math.floor(Math.log(significance) / Math.log(10));
		if (number >= 0) {
			return _g.ROUND(Math.ceil(number / significance) * significance, precision);
		} else {
			if (mode === 0) {
				return -_g.ROUND(Math.floor(Math.abs(number) / significance) * significance, precision);
			} else {
				return -_g.ROUND(Math.ceil(Math.abs(number) / significance) * significance, precision);
			}
		}
	};

	var MEMOIZED_FACT = [];

	_g.FACT = function(number) {
		number = _g.parseNumber(number);

        if( !_g.check(number)) {
            return _g.error.value;
        }
		var n = Math.floor(number);
		if (n === 0 || n === 1) {
			return 1;
		} else if (MEMOIZED_FACT[n] > 0) {
			return MEMOIZED_FACT[n];
		} else {
			MEMOIZED_FACT[n] = _g.FACT(n - 1) * n;
			return MEMOIZED_FACT[n];
		}
	};

	_g.FACTDOUBLE = function(number) {
		number = _g.parseNumber(number);
        if( !_g.check(number)) {
            return _g.error.value;
        }
		var n = Math.floor(number);
		if (n <= 0) {
			return 1;
		} else {
			return n * _g.FACTDOUBLE(n - 2);
		}
	};

    _g.COMBIN = function(number, number_chosen) {
        number = _g.parseNumber(number);
        number_chosen = _g.parseNumber(number_chosen);
        if( !_g.check(number, number_chosen))return _g.error.value;
        return _g.FACT(number) / (_g.FACT(number_chosen) * _g.FACT(number - number_chosen));
    };

    _g.COMBINA = function(number, number_chosen) {
        number = _g.parseNumber(number);
        number_chosen = _g.parseNumber(number_chosen);
        if( !_g.check(number, number_chosen))return _g.error.value;
        return (number === 0 && number_chosen === 0) ? 1 : _g.COMBIN(number + number_chosen - 1, number - 1);
    };
    _g.DEGREES = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return number * 180 / Math.PI;
    };
    _g.EVEN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return _g.CEILING(number, -2, -1);
    };

    _g.EXP = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.exp(number);
    };

	_g.FLOOR = function(number, significance) {
		number = _g.parseNumber(number);
		significance = _g.parseNumber(significance);
        if( number==_g.error.value || significance == _g.error.value) {
            return _g.error.value;
        }
		if (significance === 0) {
			return 0;
		}

		if (!(number > 0 && significance > 0) && !(number < 0 && significance < 0)) {
			return error.num;
		}

		significance = Math.abs(significance);
		var precision = -Math.floor(Math.log(significance) / Math.log(10));
		if (number >= 0) {
			return _g.ROUND(Math.floor(number / significance) * significance, precision);
		} else {
			return -_g.ROUND(Math.ceil(Math.abs(number) / significance), precision);
		}
	};
    _g.GCD = function() {
        var range = _g.argsToArray(arguments, true);
        var n = range.length;
        var r0 = range[0];
        var x = r0 < 0 ? -r0 : r0;
        for (var i = 1; i < n; i++) {
            var ri = range[i];
            var y = ri < 0 ? -ri : ri;
            while (x && y) {
                if (x > y) {
                    x %= y;
                } else {
                    y %= x;
                }
            }
            x += y;
        }
        return x;
    };

    _g.INT = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.floor(number);
    };

    _g.LCM = function() {
        var o = _g.argsToArray(arguments, true);
        for (var i, j, n, d, r = 1; (n = o.pop()) !== undefined;) {
            while (n > 1) {
                if (n % 2) {
                    for (i = 3, j = Math.floor(Math.sqrt(n)); i <= j && n % i; i += 2) {
                        //empty
                    }
                    d = (i <= j) ? i : n;
                } else {
                    d = 2;
                }
                for (n /= d, r *= d, i = o.length; i; (o[--i] % d) === 0 && (o[i] /= d) === 1 && o.splice(i, 1)) {
                    //empty
                }
            }
        }
        return r;
    };
    _g.LN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.log(number);
    };

    _g.LOG = function(number, base) {
        base = (base === undefined) ? 10 : base;
        number = _g.parseNumber(number);
        base    = _g.parseNumber(base);
        if( !_g.check(number, base))return _g.error.value;
        return Math.log(number) / Math.log(base);
    };
    _g.LOG10 = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.log(number) / Math.log(10);
    };

    /*
    _g.MDETERM = function(matrix) {
        matrix = _g.parseMatrix(matrix);
        if (matrix instanceof Error) {
            return matrix;
        }
        return numeric.det(matrix);
    };

    _g.MINVERSE = function(matrix) {
        matrix = _g.parseMatrix(matrix);
        if (matrix instanceof Error) {
        return matrix;
        }
        return numeric.inv(matrix);
    };
    */

    _g.MROUND = function(number, multiple) {
        number = _g.parseNumber(number);
        multiple = _g.parseNumber(multiple);
        if( !_g.check(number, multiple))return _g.error.value;
        if (number * multiple < 0) {
            return _g.error.num;
        }
        return Math.round(number / multiple) * multiple;
    };

    _g.MULTINOMIAL = function() {
        var args = _g.argsToArray(arguments, true);
        var sum = 0;
        var divisor = 1;
        for (var i = 0; i < args.length; i++) {
            sum += args[i];
            divisor *= exports.FACT(args[i]);
        }
        return _g.FACT(sum) / divisor;
    };

    _g.ODD = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        var temp = Math.ceil(Math.abs(number));
        temp = (temp & 1) ? temp : temp + 1;
        return (number > 0) ? temp : -temp;
    };

    _g.PI = function() {
        return Math.PI;
    };

    _g.POWER = function(number, power) {
        number  = _g.parseNumber(number);
        power   = _g.parseNumber(power);
        if( !_g.check(number, power))return _g.error.value;
        var result = Math.pow(number, power);
        if (isNaN(result)) {
            return _g.error.num;
        }
        return result;
    };

    _g.PRODUCT = function() {
        var args = _g.argsToArray(arguments, true);
        var result = 1;
        for (var i = 0; i < args.length; i++) {
            result *= args[i];
        }
        return result;
    };

	_g.sumArray = function(arr){
		if( arr.length==0 )return 0;
		var sum=0;
		if( arr[0] instanceof Array ){
			for(var i=0; i<arr.length; i++){
				for(var j=0; j<arr[0].length; j++)
					sum += arr[i][j];
			}
		}
		else{
			for(var i=0; i<arr.length; i++)sum += arr[i];
		}
		return sum;
	};

    _g.SUMPRODUCT = function() {
		var result = [];
		if( arguments[0] instanceof Array ){
			if( arguments[0].length==0 )return [];
			if( arguments[0][0] instanceof Array ){
				for(var i=0; i<arguments[0].length; i++)
					result[i] = arguments[0][i].slice();
			}
			else{
				result = arguments[0].slice();
			}
		}
		else{
			var aptg = arguments[0];
			var rs = aptg.row | 0;
			var re = aptg.rowEnd | 0;
			var cs = aptg.col | 0;
			var ce = aptg.colEnd | 0;
			var sheet = aptg.sheet | 0;

			for(var r=rs; r<=re; r++){
				var pidx = sheet+'_'+r+'_';
				result[r-rs] = [];
				for( var c=cs; c<=ce; c++){
					var idx = pidx+c;
					var num = 0;
					//if( data.hasOwnProperty(idx) )num = +data[idx]
					var v = data[idx];
					if( v!==undefined )num = +v;
					result[r-rs][c-cs] = num;
				}
			}
		}
		
        for (var i = 1; i < arguments.length; i++) {
			var arr = arguments[i];
			if( arr instanceof Array ){
				if( arr.length!=result.length )
					return _g.error.value;
				
				if( result[0] instanceof Array ){
					//not implemented
					for(var r=0; r<result.length; r++){
						if( result[r].length != arr[r].length )
							return _g.error.value;
						for(var c=0; c<result[r].length; c++){
							result[r][c] = result[r][c]*(+arr[r][c]);
						}
					}
				}
				else{
					for(var i=0; i<arr.length; i++)
						result[i] = result[i]*(+arr[i]);
				}
			}else if( arr instanceof Object ){
				var aptg = arr;
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;
				if( result.length != (re-rs+1) )
					return _g.error.value;
				for(var r=rs; r<=re; r++){
					if( result[r-rs].length != (ce-cs+1) )
						return _g.error.value;
					var pidx = sheet+'_'+r+'_';
					for( var c=cs; c<=ce; c++){
						var num = 0;
						var idx = pidx+c;
						//if( data.hasOwnProperty(idx) )num = +data[idx]
						var v = data[idx];
						if( v!==undefined )num = +v;
						result[r-rs][c-cs] *= num;
					}
				}
			}
        }
        return _g.sumArray(result);
    };

	
	_g.QUOTIENT = function(numerator, denominator) {
        numerator = _g.parseNumber(numerator);
        denominator = _g.parseNumber(denominator);
        if( !_g.check(numerator, denominator))return _g.error.value;
        return parseInt(numerator / denominator, 10);
    };

    _g.RADIANS = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return number * Math.PI / 180;
    };

    _g.RAND = function() {
        return Math.random();
    };

    _g.RANDBETWEEN = function(bottom, top) {
        bottom  = _g.parseNumber(bottom);
        top     = _g.parseNumber(top);
        if( !_g.check(bottom, top))return _g.error.value;
        // Creative Commons Attribution 3.0 License
        // Copyright (c) 2012 eqcode
        return bottom + Math.ceil((top - bottom + 1) * Math.random()) - 1;
    };
    _g.ROMAN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        // The MIT License
        // Copyright (c) 2008 Steven Levithan
        var digits = String(number).split('');
        var key = ['', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'];
        var roman = '';
        var i = 3;
        while (i--) {
            roman = (key[+digits.pop() + (i * 10)] || '') + roman;
        }
        return new Array(+digits.join('') + 1).join('M') + roman;
    };

    _g.SERIESSUM = function(x, n, m, coefficients) {
        x = _g.parseNumber(x);
        n = _g.parseNumber(n);
        m = _g.parseNumber(m);
        if( !_g.check(x, n, m))return _g.error.value;
        coefficients = _g.argsToArray(coefficients, true);
        var result = coefficients[0] * Math.pow(x, n);
        for (var i = 1; i < coefficients.length; i++) {
            result += coefficients[i] * Math.pow(x, n + i * m);
        }
        return result;
    };

    _g.SIGN = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        if (number < 0) {
            return -1;
        } else if (number === 0) {
            return 0;
        } else {
            return 1;
        }
    };

    _g.SQRT = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        if (number < 0) {
            return _g.error.num;
        }
        return Math.sqrt(number);
    };

    _g.SQRTPI = function(number) {
        number = _g.parseNumber(number);
        if( !_g.check(number))return _g.error.value;
        return Math.sqrt(number * Math.PI);
    };

    _g.TRUNC = function(number, digits) {
        digits = (digits === undefined) ? 0 : digits;
        number = _g.parseNumber(number);
        digits = _g.parseNumber(digits);
        if( !_g.check(number, digits))return _g.error.value;
        var sign = (number > 0) ? 1 : -1;
        return sign * (Math.floor(Math.abs(number) * Math.pow(10, digits))) / Math.pow(10, digits);
    };

	/* walk list of arrays, area ptgs, constants
	 * and filter as numbers
	 */
    _g.walkAptgNum = function(args, cb){
		
        if( !(args instanceof Array) ){
			args = [args];
		}
		
		var alen = args.length;
		for(var i=0; i<alen; i++){
            if( args[i] instanceof Array ){
                var aiLength = args[i].length;
                for(var j=0; j<=aiLength; j++){
                    var num = _g.parseNumber( args[i][j] );
                    if( num != _g.error.value )
                        if(cb(num, j, -1)===false)return;
                }
            }else if( typeof args[i] == 'object' ){
				/* walk area ptg to identify all number cells and pass it to
				 * callback function
				 */
                var aptg = args[i];
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;

                for(var r=rs; r<=re; r++){
                    var pidx = sheet+'_'+r+'_';
                    for( var c=cs; c<=ce; c++){
                        var idx = pidx+c;
						var d = data[idx];
                        //if( data.hasOwnProperty(idx) ){
						if( d!==undefined ){
                            var num = _g.parseNumber( d );
                            if( num != _g.error.value )
                                if( cb(num, sheet, r-rs, c-cs) === false )return;
                        }
                    }
                }
            }else{
                var num = _g.parseNumber( args[i] );
                if( num != _g.error.value )
                    if(cb(num, -1, -1)===false)return;
            }
        }
    };

    _g.walkAptgAll = function(args, cb){
        if( !(args instanceof Array) )args = [args];

        //for(var i in args ){
		var alen = args.length;
		for(var i=0; i<alen; i++){
            if( args[i] instanceof Array ){
                for(var j=0; j<=args[i].length; j++){
                   if(cb(args[i][j], j, -1)===false)return;
                }
            }else if( typeof args[i] == 'object' ){
                var aptg = args[i];
				//_g.fixTables(aptg);
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;
                for(var r=rs; r<=re; r++){
                    var pidx = sheet+'_'+r+'_';
                    for( var c=cs; c<=ce; c++){
                        var idx = pidx+c;
						if( cb(data[idx], sheet, r-rs, c-cs) === false )return;
                    }
                }
            }else{
                if( cb(args[i], -1, -1) === false )return;
            }
        }
    };

    _g.walkAptg = function(args, cb){
        if( !(args instanceof Array) )args = [args];

        //for(var i in args ){
		var alen = args.length;
		for(var i=0; i<alen; i++){
            if( args[i] instanceof Array ){
                for(var j=0; j<=args[i].length; j++){
                   if(cb(args[i][j], j, -1)===false)return;
                }
            }else if( typeof args[i] == 'object' ){
                var aptg = args[i];
				var rs = aptg.row | 0;
				var re = aptg.rowEnd | 0;
				var cs = aptg.col | 0;
				var ce = aptg.colEnd | 0;
				var sheet = aptg.sheet | 0;
				
                for(var r=rs; r<=re; r++){
                    var pidx = sheet+'_'+r+'_';
                    for( var c=cs; c<=ce; c++){
                        var idx = pidx+c;
						var d = data[idx];
                        //if( data.hasOwnProperty(idx) ){
						if( d!==undefined ){
							if( cb(d, sheet, r-rs, c-cs) === false )return;
						}
                    }
                }
            }else{
                if( cb(args[i], -1, -1) === false )return;
            }
        }
    };


    _g.argsToArray = function(args, num){
        var ret = [];
        if( num != undefined && num ){
            for(var i in args){
                if( args[i] instanceof Array ){
                    ret = ret.concat(_g.argsToArray(args[i], num));
                }else if( typeof args[i] === 'object' ){
                    ret = ret.concat(_g.tableToArray(args[i], num));
                }else{
                    var n = _g.parseNumber(args[i]);
                    if( n != _g.error.value )ret.push(n);
                }
            }
        }
        else{
            for(var i in args){
                ret.push(args[i]);
            }
        }
        return ret;
    }

	_g.tableToArray = function(tbl, num){
	    var ret = [];
	    if( num != undefined && num ){
            _g.walkAptgNum(tbl, function(val){ret.push(val);});
	    }
	    else{
	        _g.walkAptg(tbl, function(val){ret.push(val);});
	    }
	    return ret;
	}
	
	_g.index = function(table, row, col){
		if( table instanceof Array ){
			if( row<0 || row>=table.length )return _g.error.value;
			if( table[0] instanceof Array )
			    return table[row][col];
			return table[row];
		}else if( typeof table == 'object'){
			if( row<0 || row>(table.rowEnd-table.row))return _g.error.value;
			if( col<0 || col>(table.colEnd-table.col))return _g.error.value;
			var idx = table.sheet + "_" + (table.row+ +row) + "_" + (table.col+ +col);
			return data[idx];
		}
		return _g.error.value;
	};
	
	_g.arrayIf = function(arr1, arr2){
		var ret = [];
		
		if( arr1 instanceof Array ){
			if( arr2 instanceof Array ){
				for(var i=0; i<arr1.length && i<arr2.length; i++)
					if( arr1[i] )ret.push(arr2[i]);
			}
			else{
				console.log('arrayIf (range) not implemented...');
			}
		}
		else{
			console.log('arrayIf (range) not implemented...');
		}
		return ret;
	}
	
	_g.formatData = function(val, fmt){
		if( !fmt )return val;
		return SSF.format(fmt, val).replace('.00%', '%');
	}


	/* currently only list based valildations are supported
	 * rest of the validations are ignored
	 */
    _g.fieldValidations = function(id, vals){
        var jqelem;

        /* if id is not list, just ignore this*/
        if( !_g.lists.hasOwnProperty(id)){
			jqelem = $(document.getElementById(id));
			
            if( !jqelem || (!jqelem.is('select') && !jqelem.hasClass('gradio')) ){
                _g.lists[id] = null;
                return false;
            }
            _g.lists[id] = jqelem;
        }
		
		
        if( !(jqelem=_g.lists[id]) ){
			return false;
		}
		
		var fmt = fmt = jqelem.data('fmt');
		if( !fmt )fmt = jqelem.data('data-fmt');


        /* update the list only if there are some changes */
        var ops = "";
		if( jqelem.hasClass('gradio') ){
			var i=0;
			_g.walkAptg(vals, function(val){
				ops += "<label><input type='radio' name='"+id+"' id='chk-"+ i++ +"-"+ id + "' value='"+val+"' class='gradio-item'>"+val+"</label>";
			});
		}
		else{
			var prcnt = fmt && fmt.indexOf('%')==fmt.length-1;
			if( prcnt )fmt = "0.00%";
			_g.walkAptg(vals, function(val){
				//console.log(fmt+' => '+val+' => '+_g.formatData(val, fmt));
				if(prcnt && typeof val == 'string' && val.length>0)val = (+val.substring(0, val.length-1))/100;
				ops += "<option value='"+val+"'>"+_g.formatData(val, fmt)+"</option>";
				
			});
		}

        if( _g.listVals[id] == ops ){
            return false;
        }

		var oldVal = jqelem.val();
		if( jqelem.hasClass('gradio') ){
			oldVal = $('input[name='+id+']:radio:checked').val();
		}
			
		if( oldVal == null )oldVal = data[id];
		jqelem.empty().append(ops);
		if( jqelem.hasClass('gradio') ){
			$("input[name="+id+"][value='" + oldVal+ "']").attr('checked', 'checked');
			//$("input[name="+id+"]").val(oldVal);
			$('[id^=chk-]').change(function(e){
				e.preventDefault();
				var parts = this.id.split('-');
				if( parts.length!=3)return;
				data[parts[2]] = this.value;
				var chks = document.getElementsByName(this.name);
				for( var i=0; i<chks.length; i++){
					if( chks[i].type=="checkbox" && chks[i].id != this.id)chks[i].checked = false;
				}
				if(xl2g){
					xl2g.evalAllTargets();
					if( xl2g.afterRadioChange )
						xl2g.afterRadioChange(this);
				}
			});
			
		}
		else
			jqelem.val(oldVal)
		
		
        _g.listVals[id] = ops;

    }

    _g.SUM = function(){
        var sum = 0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){sum+=val;});
        return sum;
    };
    _g.SUMIF = function(range, criteria, sum_range){
        var sum = 0;
		if( sum_range == undefined ){
			_g.walkAptgNum(range, function(val){
				if( _g.criteria(criteria, val) )sum+=val;
			});
		}
		else if( typeof sum_range == 'object') {
			//not so good optimization (will not support complex criteria)
			//-rr jul-27-2016
			if( typeof criteria === 'number' || typeof criteria === 'boolean' ){
				var rs = range.row|0;
				var re = range.rowEnd|0;
				var cs = range.col|0;
				var ce = range.colEnd|0;
				
				
				if( rs===re ){
					var sc = sum_range.col|0;
					var idxpre = range.sheet+"_"+rs+"_";
					var idxpretar = sum_range.sheet + "_"+ (+sum_range.row) + "_";
					
					for(var c=cs; c<=ce; c++){
						if( data[idxpre+c] == criteria ){
							var val = parseFloat(data[idxpretar+(sc+c-cs) ]);
							if( !isNaN(val) )sum += val;
						}
					}
					return sum;
				}
				
				if( cs===ce ){
					//looks like too much code for optimization, imagine a sheet with 
					//	hundreds of thousands of sumifs
					//
					var pre = range.sheet+"_";
					var pretar = sum_range.sheet + "_";
					var suf="_"+cs;
					var suftar="_"+sum_range.col;
					var sr = sum_range.row|0;
					for(var r=rs; r<=re; r++){
						if( data[pre+r+suf] == criteria ){
							var val = parseFloat(data[ pretar + (sr+r-rs) + suftar ]);
							if( !isNaN(val) )sum += +val;
						}
					}
					return sum;
				}
				
				
				
				_g.walkAptg(range, function(val, sheet, row, col ){
					if( criteria == val ){
						var idx = sum_range.sheet + "_"+ (+sum_range.row + +row) + "_"+ (+sum_range.col + +col);
						var val = _g.parseNumber(data[idx]);
						if( val != _g.error.value )sum += +val;
					}
				});
				return sum;
			}
			
			if( typeof criteria === 'string' ){
				var code = criteria.charAt(0);
				if( code != '<' && code != '>' && code != '=' && code != '!' ){
					_g.walkAptg(range, function(val, sheet, row, col ){
						if( criteria == val ){
							var idx = sum_range.sheet + "_"+ (+sum_range.row + +row) + "_"+ (+sum_range.col + +col);
							var val = _g.parseNumber(data[idx]);
							if( val != _g.error.value )sum += +val;
						}
					});
					return sum;
				}
			}
			
			
			
			_g.walkAptg(range, function(val, sheet, row, col ){
				if( _g.criteria(criteria, val) ){
					var idx = sum_range.sheet + "_"+ (+sum_range.row + +row) + "_"+ (+sum_range.col + +col);
					var val = _g.parseNumber(data[idx]);
					if( val != _g.error.value )sum += +val;
				}
			});
		}
		else if( typeof sum_range == 'string'){
			//single cell refernece
			var parts = sum_range.split('_');
			var srow = parts[1];
			var scol = parts[2];
			_g.walkAptg(range, function(val, sheet, row, col ){
				if( _g.criteria(criteria, val) ){
					var idx = parts[0] + "_"+ (+srow + +row) + "_"+ (+scol + +col);
					var val = _g.parseNumber(data[idx]);
					if( val != _g.error.value )sum += +val;
				}
			});
			
		}
		else{
			console.log(sum_range);
			console.log("error: sumif: sum_range array not implemented.");
		}
        return sum;
    };


	_g.SUMSQ = function(){
        var sum = 0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){sum+=val*val;});
        return sum;
    };

    _g.AVERAGE = function(){
        var sum = 0;
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){sum+=val;count++;});
        if( count>0 )return sum/count;
        return 0;
    };
    _g.AVERAGEA = function(){
        var sum = 0;
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptg(arguments[i], function(val){
				if( isNumber(val))sum += +val;
				else if( val === true )sum += 1;
				if( val!=null) count++;
			});
        if( count>0 )return sum/count;
        return 0;
    };
    _g.AVERAGEIF = function(range, criteria, average_range){
        var sum = 0;
        var count=0;
		_g.walkAptg(range, function(val, s, r, c){
			if( _g.criteria(criteria, val) ){
				
				if( average_range != undefined)
					val = _g.index(average_range, r, c);
				
				val = _g.parseNumber(val);
				if( val != _g.error.value ){
					sum += val;
					count ++;
				}
			}
		});
        if( count>0 )return sum/count;
        return 0;
    };

    _g.AVERAGEIFS = function(){
		var range = arguments[0];
		var criterias = arguments;
        var sum = 0;
        var count=0;
		_g.walkAptg(range, function(val, s, r, c){
			var status = true;
			for(var i=1; i<criterias.length; i+=2 ){
				var cval = _g.index(criterias[i], r, c);
				if( !_g.criteria(criterias[i+1], cval) ){
					status = false;
					break;
				}
			}
			if( status ){
				val = _g.parseNumber(val);
				if( val != _g.error.value ){
					sum += val;
					count ++;
				}
			}
		});
        if( count>0 )return sum/count;
        return 0;
    };


	_g.COUNT = function(){
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgNum(arguments[i], function(val){count++;});
        return count;
    };

    _g.COUNTIF = function(range, criteria){
        var count=0;
		if( typeof criteria === 'string' ){
			var code = criteria.charAt(0);
			if( code != '<' && code != '>' && code != '=' && code != '!' ){
				_g.walkAptg(range, function(val){
					if( /*val &&*/ criteria == val )count++;
				});
				return count;
			}
		}
        _g.walkAptg(range, function(val){
			if( _g.criteria(criteria, val) )count++;
		});
        return count;
    };

	_g.COUNTA = function(){
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptg(arguments[i], function(val){count++;});
        return count;
    };
	_g.COUNTBLANK = function(){
        var count=0;
        for(var i=0; i<arguments.length; i++)
            _g.walkAptgAll(arguments[i], function(val){
				if(val==undefined || val == '' )count++;
			});
        return count;
	}
    _g.COUNTIFS = function(){
		var criterias = arguments;
        var sum = 0;
        var count=0;
		_g.walkAptg(criterias[0], function(val, s, r, c){
			var status = true;
			if( _g.criteria(criterias[1], val) ){
				for(var i=2; i<criterias.length; i+=2 ){
					var cval = _g.index(criterias[i], r, c);
					if( !_g.criteria(criterias[i+1], cval) ){
						status = false;
						break;
					}
				}
				if( status )count ++;
			}
			
		});
        return count;
    };

    _g.MAX = function(){
        var max = -Number.MAX_VALUE;
		for(var i=0; i<arguments.length; i++)
			_g.walkAptg(arguments[i], function(val){
			    if( val instanceof Date )val = val.getTime();
			    else val = _g.parseNumber(val);
			    if(val>max)max = val;
			});
        return max==-Number.MAX_VALUE?0:max;
    };

    _g.MIN = function(){
        var min = Number.MAX_VALUE;
		for(var i=0; i<arguments.length; i++)
			_g.walkAptgNum(arguments[i], function(val){
			    if( val instanceof Date )val = val.getTime();
			    else val = _g.parseNumber(val);
			    if(val<min)min = val;
			});
        return min==Number.MAX_VALUE?0:min;
    };

    _g.TODAY = function(){
        var d1 = new Date();
        d1.setHours(0,0,0);
        return d1;
    };

    _g.NOW = function(){
        return new Date();
    };

    _g.equalArray = function(v1, v2){
        if( typeof v1 == 'object' )v1 = _g.tableToArray(v1);
        if( typeof v2 == 'object' )v2 = _g.tableToArray(v2);

        var ret = [];
        if( v1 instanceof Array && !(v2 instanceof Array) ){
            for(var i=0; i<v1.length; i++)ret.push(v1[i] == v2);
        }
        else if( v2 instanceof Array && !(v1 instanceof Array) ){
            for(var i=0; i<v2.length; i++)ret.push(v2[i] == v1);
        }
        else{
            for(var i=0; i<v2.length; i++)ret.push(i<v1.length?v2[i]==v1[i] : false);
        }
        return ret;
    };


	/* caseless, typefull comparison of strings, numbers
	 * dates etc
	 */
	_g.equal = function(v1, v2){
		if( v1 === undefined )return v2 == undefined || v2 == '';
		if( v2 === undefined )return v1 == undefined || v1 == '';

		/* dates should be compared as numbers (seconds since...) */
		if( v1 instanceof Date )v1 = v1.getTime();
		if( v2 instanceof Date )v2 = v2.getTime();
		
        if( v1 instanceof Array || v2 instanceof Array || typeof v1 == 'object' || typeof v2 == 'object')
            return _g.equalArray(v1, v2);

		/* if its a string make it caseless */
		if( typeof v1=='string' )v1 = v1.toLowerCase();
		if( typeof v2=='string' )v2 = v2.toLowerCase();
		
		/* just compare now (types must match) */
		return ( v1 === v2 );
	}

	_g.equalString = function(v1, v2){
		v1 = v1 || '';
		v2 = v2 || '';
		return ( String(v1).toLowerCase() === String(v2).toLowerCase() );
	}

    _g.mulArray = function(v1, v2){
        if( typeof v1 == 'object' )v1 = _g.tableToArray(v1);
        if( typeof v2 == 'object' )v2 = _g.tableToArray(v2);

        var ret = [];
        if( v1 instanceof Array && !(v2 instanceof Array) ){
            for(var i=0; i<v1.length; i++)ret.push(v1[i]*v2);
        }
        else if( v2 instanceof Array && !(v1 instanceof Array) ){
            for(var i=0; i<v2.length; i++)ret.push(v2[i]*v1);
        }
        else{
            for(var i=0; i<v2.length; i++)ret.push(i<v1.length?v2[i]*v1[i] : 0);
        }
        return ret;
    }

    _g.mul = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
        if( v1 instanceof Array || v2 instanceof Array || typeof v1 == 'object' || typeof v2 == 'object')
            return _g.mulArray(v1, v2);
	    return (+v1) * (+v2);
    }

    _g.div = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
	    if( +v2==0 )return _g.error.value;
	    return +v1 / +v2;
    }
	
    _g.pow = function(v1, v2){
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
	    return Math.pow(+v1, +v2);
    }

    _g.add = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;
	    return (+v1) + (+v2);
    }

	_g.sub = function(v1, v2){
		if( _g.checkerr(v1) )return v1;
		if( _g.checkerr(v2) )return v2;
		
	    if( v1 === undefined )v1 = 0;
	    if( v2 === undefined )v2 = 0;

		if( v1 instanceof Date || v2 instanceof Date ){
	        if( !(v1 instanceof Date) )v1 = _g.parseDate(v1);
	        if( !(v2 instanceof Date) )v2 = _g.parseDate(v2);

            /* datedif parameters are start, end */
            return _g.DATEDIF(v2, v1, 'd');
	    }
	    else{
	        return _g.num(v1) - _g.num(v2);
	    }
	}


	/* returns <0 =0 >0 based on the input data (numbers and strings)
	    - for strings a caseless (lowercase to be more precise) is used
	    - in excel a number is always less than a string (even if the string
	    appears to be small ).
	    - string form of number is converted to actual number first
	 */
	_g.diff = function(v1, v2){
		if( _g.ISERROR(v1) )return _g.ISERROR(v2)?0:-1;
		if( _g.ISERROR(v2) )return 1;


		if( v1 instanceof Date )v1 = v1.getTime();
		if( v2 instanceof Date )v2 = v2.getTime();
		
		if( isNumber(v1) )v1 = +v1;
		else if(typeof v1 === 'string') v1 = v1.toLowerCase();
		if( isNumber(v2) )v2 = +v2;
		else if(typeof v2 === 'string') v2 = v2.toLowerCase();


		if( typeof v1 == 'string' && typeof v2 != 'string' )return 1;
		if( typeof v1 != 'string' && typeof v2 == 'string' )return -1;
		if( v1 == v2 )return 0;
		return ( v1 <  v2 )? -1 : 1;
	}

    _g.VLOOKUP = function(value, table, resIndex, approx){

        resIndex = _g.parseNumber(resIndex);
        if( !_g.check(resIndex) )return _g.error.na;
		
        resIndex = Math.round(+resIndex);
		if( resIndex<1 )return _g.error.value;

		if( approx == undefined )approx = 1;

        var prev = _g.error.na;
        if( table instanceof Array ){
			var tlen = table.length;
            for(var r=0; r<tlen; r++){

                if( _g.equal(table[r][0], value) )return table[r][resIndex-1];
                if( approx ){
                    if( _g.diff(table[r][0], value) > 0 )return isNumber(prev) ? +prev : prev;
                    prev = table[r][resIndex-1];
                }
            }
            if( approx )return isNumber(prev) ? +prev : prev;
            return _g.error.na;
        }

        if( typeof table != 'object' ){

            console.log("invalid paramter to vlookup expected table ");
            return _g.error.ref;
        }

		//_g.fixTables(table);
        var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		if( typeof value === 'string'){
			var sheet_ = sheet + "_";
			var _cs = "_"+cs;
			value = value.toLowerCase();
			for(var r=rs; r<=re; r++){
				var idx = sheet_ + r + _cs;
				var d = data[idx];
				if( String(d).toLowerCase() === value ){
					var resIdx = sheet_ + r + "_" + (cs+resIndex-1);
					var rd = data[resIdx];
					return isNumber(rd) ? +rd : rd;
				}

				if( approx ){
					if( _g.diff(d, value) > 0 )return isNumber(prev) ? +prev : prev;

					var resIdx = sheet_ + r + "_" + (cs+resIndex-1);
					prev = data[resIdx];
				}

			}
		}
		else{
			for(var r=rs; r<=re; r++){
				var idx = sheet + "_" + r + "_" + cs;


				if( _g.equal(data[idx], value) ){
					var resIdx = sheet + "_" + r + "_" + (cs+resIndex-1);
					var rd = data[resIdx];
					return isNumber(rd) ? +rd : rd;
				}

				if( approx ){
					if( _g.diff(data[idx], value) > 0 )return isNumber(prev) ? +prev : prev;

					var resIdx = sheet + "_" + r + "_" + (cs+resIndex-1);
					prev = data[resIdx];
				}

			}
		}
        if( approx )return isNumber(prev) ? +prev : prev;
        //console.log("vlookup not found for "+value+" in ["+rs+":"+re+", "+cs+":"+ce+"] sheet: "+sheet);
        return _g.error.na;
    }

    _g.HLOOKUP = function(value, table, resIndex, approx){

        resIndex = _g.parseNumber(resIndex);
        if( !_g.check(resIndex) )return _g.error.na;
        resIndex = Math.round(+resIndex);
		if( resIndex<1 )return _g.error.value;
		if( approx == undefined )approx = 1;
        var prev = _g.error.na;

        if( table instanceof Array ){
			var t0len = table[0].length;
            for(var c=0; c<t0len; c++){
                if( _g.equal(table[0][c], value) )return table[resIndex-1][c];
                if( approx ){
                    if( _g.diff(table[0][c], value) > 0 )return isNumber(prev) ? +prev : prev;
                    prev = table[resIndex-1][c];
                }
            }
            if( approx )return isNumber(prev) ? +prev : prev;
            return _g.error.na;
        }


        if( typeof table != 'object' ){
            console.log("invalid paramter to hlookup expected table ");
            return _g.error.ref;
        }



		//_g.fixTables(table);
		
        var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		var pidx = sheet + "_" + rs + "_";
        for(var c=cs; c<=ce; c++){
            var idx = pidx + c;
            

            if( _g.equal(data[idx], value) ){
				var resIdx = sheet + "_" + (rs+resIndex-1)+"_"+c;
                return isNumber(data[resIdx]) ? +data[resIdx] : data[resIdx];
			}
			
            if( approx ){
				if( _g.diff(data[idx], value) > 0 )return isNumber(prev) ? +prev : prev;
                var resIdx = sheet + "_" + (rs+resIndex-1)+"_"+c;
				prev = data[resIdx];
            }

        }
        if( approx )return isNumber(prev) ? +prev : prev;
        //console.log("h-lookup not found for "+value+" in ["+table.row+":"+table.rowEnd+", "+table.col+":"+table.colEnd+"] sheet: "+table.sheet);
        return _g.error.na;
    };

    _g.MATCHARRAY = function(value, table, type){
        var prev = _g.error.na;
        for(var i=0; i<table.length; i++ ){
            if( _g.equal(table[i], value) )return i+1;
            if( type!=0 ){
                diff = _g.diff(table[i], value);
                if( type== 1 && diff>0 )return prev;
                if( type==-1 && diff<0 )return prev;
            }
            prev = i+1;
        }
        return _g.error.na;
    };

    _g.MATCH = function(value, table, type){

        if( table instanceof Array )
            return _g.MATCHARRAY(value, table, type);

        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }

		if( type == undefined )type = 1;
        var prev = _g.error.na;

		var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		
		var diff;
        if( rs == re){
            /* search columns */
            for(var c=cs; c<=ce; c++){
                var idx = sheet + "_" + rs + "_" + c;
                if( _g.equal(data[idx], value) )return c - +cs + 1;
				
				if( type!=0 ){
					diff = _g.diff(data[idx], value);
					if( type== 1 && diff>0 )return prev;
					if( type==-1 && diff<0 )return prev;
				}
                prev = c - table.col+1;
            }
            if( type != 0 )return prev;
        }
        else if( cs == ce){
			var _cs = "_"+cs;
			var sheet_ = sheet+"_";
			
            /* search rows */
			if( typeof value === 'string' ){
				for(var r=rs; r<=re; r++){
					var idx = sheet_ + r + _cs;
					if( _g.equalString(data[idx], value) )return r - rs + 1;

					if( type!=0 ){
						diff = _g.diff(data[idx], value);
						if( type== 1 && diff>0 )return prev;
						if( type==-1 && diff<0 )return prev;
					}
					prev = r - table.row + 1;
				}
			}
			else{
				
			    for(var r=rs; r<=re; r++){
					var idx = sheet + "_" + r + "_" + cs;
					if( _g.equal(data[idx], value) )return r - rs + 1;

					if( type!=0 ){
						diff = _g.diff(data[idx], value);
						if( type== 1 && diff>0 )return prev;
						if( type==-1 && diff<0 )return prev;
					}
					prev = r - table.row + 1;
				}
			}
            if( type != 0 )return prev;
        }
        else{
            console.log("unimplemented match case...");
        }
        return _g.error.na;
    };
	
	
    _g.MATCH_orig = function(value, table, type){

        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }
        _g.fixTables(table);
        if( type == undefined )type = 1;
        var prev = _g.error.na;
        if( +table.row == +table.rowEnd){
            /* search columns */
            for(var c=table.col; c<=table.colEnd; c++){
                var idx = table.sheet + "_" + table.row + "_" + c;
                if( _g.equal(data[idx], value) )return c - +table.col + 1;
                if( type== 1 && _g.diff(data[idx], value)>0 )return prev;
                if( type==-1 && _g.diff(data[idx], value)<0 )return prev;
                prev = c - table.col+1;
            }
            if( type != 0 )return prev;
        }
        else if( +table.col == +table.colEnd){
            /* search rows */
            for(var r=table.row; r<=table.rowEnd; r++){
                var idx = table.sheet + "_" + r + "_" + table.col;
                if( _g.equal(data[idx], value) )return r - +table.row + 1;
                if( type== 1 && _g.diff(data[idx], value)>0 )return prev;
                if( type==-1 && _g.diff(data[idx], value)<0 )return prev;
                prev = r - table.row + 1;
            }
            if( type != 0 )return prev;
        }
        else{
            console.log("unimplemented match case...");
        }
        return _g.error.na;
    };

	_g.LOOKUP = function(value, table, resTable){

	    if( table instanceof Array ){
	        if( table.lenggth > table[0].length ){
	            var c = table[0].length-1;
                for(var r=0; r<table.length; r++){
                    if( _g.equal(table[r][0], value) ){
                        return ( resTable == undefined ) ? table[r][c] : resTable[r][0];
                    }
                    if( _g.diff(table[r][0], value) > 0 )return prev;
                    prev = ( resTable == undefined ) ? table[r][c] : resTable[r][0];
                }
                return prev;
	        }
	        else{
	            var r = table.length-1;
                for(var c=0; c<table[0].length; c++){
                    if( _g.equal(table[0][c], value) ){
                        return ( resTable == undefined ) ? table[r][c] : resTable[0][c];
                    }
                    if( _g.diff(table[0][c], value) > 0 )return prev;
                    prev = ( resTable == undefined ) ? table[r][c] : resTable[0][c];
                }
                return prev;
	        }
	    }


        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }
		_g.fixTables(resTable);
        var rs = table.row | 0;
        var re = table.rowEnd | 0;
        var cs = table.col | 0;
        var ce = table.colEnd | 0;
        var sheet = table.sheet | 0;
		
		var prev = _g.error.na;
		if( (re - rs) > (ce - cs) ){
			/* more rows than columns, search in first col and every row */
			for( var r=rs; r<=re; r++){
				var idx = sheet + "_" + r + "_" + cs;
				//if( data.hasOwnProperty(idx) ){
				if( data[idx]!==undefined ){
					var didx = sheet + "_" + r + "_" + ce;
					if( _g.equal(data[idx], value) ){
						return ( resTable == undefined ) ? data[didx] : data[sheet + "_" + r + "_" + resTable.colEnd];
					}
					//if( isNumber(value) && +data[idx] > +value )
					if( _g.diff(data[idx], value) > 0 )
						return prev;
					prev = ( resTable == undefined ) ? data[didx] : data[sheet + "_" + r + "_" + resTable.colEnd];
				}
			}
			return prev;
			
		}
		else{
			var pidx = sheet + "_" + rs + "_";
			for( var c=cs; c<=ce; c++){
				var idx = pidx + c;
				//if( data.hasOwnProperty(idx) ){
				if( data[idx]!==undefined ){
					var didx = sheet + "_" + re + "_" + c;
					if( _g.equal(data[idx], value) ){
						return ( resTable == undefined ) ? data[didx] : data[sheet + "_" + resTable.rowEnd + "_" + c];
					}
					if( _g.diff(data[idx], value) > 0 )
						return prev;
					prev = ( resTable == undefined ) ? data[didx] : data[sheet + "_" + resTable.rowEnd + "_" + c];
				}
			}
			return prev;
		}
	};

    _g.INDEX = function(table, row, col){
        /* table could be array refernce */
        
        if( table instanceof Array ){

            if( table.length<=1 ){
                if( row<1 || row>table[0].length+1)return _g.error.ref;
                return table[0][row-1]; //first param (row) should be treated as column index
            }
            else{
                if( row<1 || row>table[0].length+1)return _g.error.ref;
                if( col<1 || col>table[row].length+1)return _g.error.ref;
                return table[row-1][col-1];
            }
        }
		
        if( typeof table != 'object' ){
            console.log("invalid paramter to match expected table ");
            return _g.error.ref;
        }
        _g.fixTables(table);
        if( table.row == table.rowEnd ){
            if( row<1 || row>(table.colEnd-table.col+1))return _g.error.ref;
            var idx = table.sheet + "_" + table.row + "_" + (table.col + (+row) - 1);
			if( row==0 )return idx;
            return data[idx];
        }
        if( table.col == table.colEnd ){
            if( row<1 || row>(table.rowEnd-table.row+1))return _g.error.ref;
            var idx = table.sheet + "_" + (table.row+ +row -1) + "_" + table.col;
			if( col==0 )return idx;
            return data[idx];
        }
		
		if( col==0 ){
			var ret = [];
			for(var c=table.col; c<=table.colEnd; c++){
				var idx = table.sheet + "_" + (table.row) + "_" + c;
				ret.push([data[idx]]);
			}
			return ret;
		}
		if( row==0 ){
			var ret = [];
			for(var r=table.row; r<=table.rowEnd; r++){
				var idx = table.sheet + "_" + (r) + "_" + table.col;
				ret.push(data[idx]);
			}
			return ret;
		}
		
		if( row == 0 || col == 0 )console.log("unimplemented case (INDEX) returning array");

        if( row<1 || row>(table.rowEnd-table.row+1))return _g.error.ref;
        if( col<1 || col>(table.colEnd-table.col+1))return _g.error.ref;
        var idx = table.sheet + "_" + (+table.row + (+row) - 1) + "_" + (+table.col + (+col) - 1);
        return data[idx];
    };
	
	_g.AND = function(table){
		var ret = _g.error.value;
		for(var r=+table.row; r<=+table.rowEnd; r++){
			for(var c=+table.col; c<=+table.colEnd; c++){
				var idx = table.sheet + "_" + r + "_" + c;
				if( data[idx] !== undefined ){
					if( !_g.parseBool(data[idx]) )
						return false;
					else
						ret = true;
					//console.log(" => "+data[idx]);
				}
			}
		}
		//console.log(" => "+ret);
		return ret;
	};

    _g.ROUND = function(number, digits) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return _g.error.value;
        if( (digits=_g.parseNumber(digits)) == _g.error.value )digits = 0;
		
		
		//console.log("round("+digits+") "+number+" => "+Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits));
		//number = Math.round(number * Math.pow(10, (digits+1))) / Math.pow(10, (digits+1));
		
		var tmp = (""+number).split('.');
		if( tmp.length>1 ){
			var declen = tmp[1].length;
			//console.log(tmp);
			//console.log(tmp[1].length);
			
			//we should also check if last few digits are repeating
			if( declen>10 && tmp[1][declen-1]==tmp[1][declen-2] && tmp[1][declen-1]==tmp[1][declen-3] ){
				if( number>0 )
					number += 0.000000001;
				else if(number<0)
					number -= 0.000000001;
			}
		}
		
		//console.log("     => "+Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits));
        return Math.round(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    _g.ROUNDUP = function(number, digits) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return _g.error.value;
        if( (digits=_g.parseNumber(digits)) == _g.error.value )digits = 0;
        return Math.ceil(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
    _g.ROUNDDOWN = function(number, digits) {
        if( (number=_g.parseNumber(number)) == _g.error.value )return _g.error.value;
        if( (digits=_g.parseNumber(digits)) == _g.error.value )digits = 0;
        return Math.floor(number * Math.pow(10, digits)) / Math.pow(10, digits);
    };
	
	_g.IFERROR = function(value, value_if_error){
		//value_if_error = value_if_error || '';
		if( value_if_error === undefined )value_if_error = '';
		//if( !value && !value_if_error )return 0;
		if (Array.isArray(value)){
			var ret = [];
			for(var i=0; i<value.length; i++)
				ret.push( _g.IFERROR(value[i], value_if_error) );
			return ret;
		}
		if( _g.ISERROR(value) )return value_if_error;
		return value;
	};

    _g.checkerr = function(value){
		return 
		  ( value == _g.error.value ||
			value == _g.error.ref	||
			value == _g.error.na    ||
			value == _g.error.num   ||
			value == _g.error.error ||
			value == _g.error.name  
			);
    };


    _g.ISERROR = function(value){

		if( value == undefined ){
			return true;
		}
		if( typeof value == "number" && isNaN(value) ){
		    return true;
		}
		if( value == _g.error.value )return true;
		if( value == _g.error.ref   )return true;
		if( value == _g.error.na    )return true;
		if( value == _g.error.num   )return true;
		if( value == _g.error.error )return true;
		if( value == _g.error.name  )return true;

        //for( var e in _g.error )
        //    if( value == _g.error[e] )return true;
        return false;
    };
    _g.ISERR = function(value){
		if( value == undefined )return true;
        for( var e in _g.error )
            if( value == _g.error[e] )return true;
        return false;
    };
    _g.ISBLANK = function(value){
        if( value == undefined || value == null )return true;
        return false;
    };
    _g.ISNUMBER = function(value){
        return isNumber(value);
    };
	
	_g.ISNA = function(value){
		if( value == _g.error.na )return true;
		return false;
	}
	_g.ISREF = function(value){
		if( value == _g.error.ref )return true;
		return false;
	}
    _g.ISEVEN = function(number) {
        return (Math.floor(Math.abs(+number)) & 1) ? false : true;
    };
    _g.ISLOGICAL = function(value) {
        return value === true || value === false;
    };
    _g.ISODD = function(number) {
        return (Math.floor(Math.abs(+number)) & 1) ? true : false;
    };
    _g.ISTEXT = function(value) {
        return !isNumber(value);
    };
    _g.ISNONTEXT = function(value) {
        if( this.ISNUMBER(value) || value instanceof Date) return true;
        return false;
    };

    _g.N = function(value) {
        if (this.ISNUMBER(value)) {
            return value;
        }
        if (value instanceof Date) {
            return value.getTime();
        }
        if (value === true) {
            return 1;
        }
        if (value === false) {
            return 0;
        }
        if (this.ISERROR(value)) {
            return value;
        }
        return 0;
    };

    _g.NA = function() {
        return _g.error.na;
    };
    _g.TYPE = function(value) {
        if (this.ISNUMBER(value)) {
            return 1;
        }
        if (this.ISTEXT(value)) {
            return 2;
        }
        if (this.ISLOGICAL(value)) {
            return 4;
        }
        if (this.ISERROR(value)) {
            return 16;
        }
        if (Array.isArray(value)) {
            return 64;
        }
    };

    _g.serial = function(date) {
        var addOn = (date > -2203891200000)?2:1;
        return (date - d1900) / 86400000 + addOn;
    };

    _g.DATE = function(year, month, day){
        year = _g.parseNumber(year);
        month= _g.parseNumber(month);
        day  = _g.parseNumber(day);
        if( !_g.check(year, month, day))return _g.error.value;

        /* 1900 year system - not compatible with Mac */
        if( year<0 || year>=10000 )return _g.error.num;
        if( year>=0 && year <=1899 )year += 1900;
        /* else the year is used as such */

        /* javascript month is 0 - jan 1 - feb etc */
        var dt = new Date(year, month-1, day, 0, 0, 0, 0);
        return dt.getTime();
    }
    _g.DATEVALUE = function(date_text) {
        if (typeof date_text !== 'string') {
            return error.value;
        }
        var date = Date.parse(date_text);
        if( isNaN(date) )return _g.error.value;
        if (date <= -2203891200000) {
            return (date - d1900) / 86400000 + 1;
        }
        return (date - d1900) / 86400000 + 2;
    };
    _g.DAY = function(serial_number) {
        if( serial_number instanceof Date )
            return serial_number.getDate();
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseNumber(serial_number);
        if( serial_number == _g.error.value )return _g.error.value;
        if( serial_number > 2958446 ){
            var date = new Date(serial_number);
            return date.getDate();
        }
        else{
            var date = _g.parseDate(serial_number);
            if(date == _g.error.value )return _g.error.value;
            return date.getDate();
        }

    };
    _g.DAYS360 = function(start_date, end_date, method) {
        method      = _g.parseBool(method);
        start_date  = _g.parseDate(start_date);
        end_date    = _g.parseDate(end_date);
        if( !_g.check(method, start_date, end_date))return _g.error.value;
        var sm = start_date.getMonth();
        var em = end_date.getMonth();
        var sd, ed;
        if (method) {
            sd = start_date.getDate() === 31 ? 30 : start_date.getDate();
            ed = end_date.getDate() === 31 ? 30 : end_date.getDate();
        } else {
            var smd = new Date(start_date.getFullYear(), sm + 1, 0).getDate();
            var emd = new Date(end_date.getFullYear(), em + 1, 0).getDate();
            sd = start_date.getDate() === smd ? 30 : start_date.getDate();
            if (end_date.getDate() === emd) {
                if (sd < 30) {
                    em++;
                    ed = 1;
                } else {
                    ed = 30;
                }
            } else {
                ed = end_date.getDate();
            }
        }
        return 360 * (end_date.getFullYear() - start_date.getFullYear()) +
        30 * (em - sm) + (ed - sd);
    };

    _g.monthDays = function(){
        if( arguments[0] instanceof Date )
            return new Date(arguments[0].getFullYear(), arguments[0].getMonth(), 0).getDate();
        else if( arguments.length == 2){
            return new Date(arguments[0], arguments[1], 0).getDate();
        }
        return 0;
    }
    _g.EDATE = function(start_date, months) {
        start_date  = _g.parseDate(start_date);
        months      = _g.parseNumber(months);
        if( !_g.check(start_date, months))return _g.error.value;
        /* just adding months doesnot work for the edge case of last day of month */
        if( _g.monthDays(start_date) == start_date.getDate() ){
            var day = _g.monthDays(start_date.getFullYear(), start_date.getMonth() + months+1);
            start_date = new Date(start_date.getFullYear(), start_date.getMonth() + months, day);
        }
        else
            start_date.setMonth(start_date.getMonth() + months);
        //return _g.serial(start_date);
        return start_date.getTime();
    };

    _g.EOMONTH = function(start_date, months) {
        start_date = _g.parseDate(start_date);
        if( !_g.check(start_date))return _g.error.value;
        months = parseInt(months, 10);
        return new Date(start_date.getFullYear(), start_date.getMonth() + months + 1, 0).getTime();
    };
    _g.HOUR = function(serial_number) {
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getHours();
    };
    _g.MINUTE = function(serial_number) {
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getMinutes();
    };

    _g.MONTH = function(serial_number) {
		if( serial_number===undefined )return _g.error.value;
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getMonth() + 1;
    };

    _g.NETWORKDAYS = function(start_date, end_date, holidays, weekend) {
        start_date  = _g.parseDate(start_date);
        end_date    = _g.parseDate(end_date);
        if( !_g.check(start_date, end_date))return _g.error.value;

        weekend = (weekend === undefined) ? WEEKEND_TYPES[1] : WEEKEND_TYPES[+weekend];
        if (!(weekend instanceof Array))return _g.error.value;

        if (holidays === undefined) {
            holidays = [];
        } else if (!(holidays instanceof Array)) {
            holidays = [holidays];
        }

        for (var i = 0; i < holidays.length; i++) {
            holidays[i] = _g.parseDate(holidays[i]);
            if( !_g.check(holidays[i]) )return _g.error.value;
        }

        var days = (end_date - start_date) / (1000 * 60 * 60 * 24) + 1;
        var total = days;
        var day = start_date;
        for (i = 0; i < days; i++) {
            var d = (new Date().getTimezoneOffset() > 0) ? day.getUTCDay() : day.getDay();
            var dec = false;
            if (d === weekend[0] || d === weekend[1]) {
                dec = true;
            }
            for (var j = 0; j < holidays.length; j++) {
                var holiday = holidays[j];
                if (holiday.getDate() === day.getDate() &&
                    holiday.getMonth() === day.getMonth() &&
                    holiday.getFullYear() === day.getFullYear()) {
                        dec = true;
                        break;
                }
            }
            if (dec)total--;
            day.setDate(day.getDate() + 1);
        }
        return total;
    };

    _g.SECOND = function(serial_number) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getSeconds();
    };

    _g.TIME = function(hour, minute, second) {
        hour    = _g.parseNumber(hour);
        minute  = _g.parseNumber(minute);
        second  = _g.parseNumber(second);

        if( !_g.check(hour, minute, second))return _g.error.value;

        if (hour < 0 || minute < 0 || second < 0) {
            return _g.error.num;
        }
        return (3600 * hour + 60 * minute + second) / 86400;
    };

    _g.TIMEVALUE = function(time_text) {
        time_text = _g.parseDate(time_text);
        if( !_g.check(time_text))return _g.error.value;
        return (3600 * time_text.getHours() +
            60 * time_text.getMinutes() +
            time_text.getSeconds()) / 86400;
    };

    _g.WEEKDAY = function(serial_number, return_type) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        if (return_type === undefined) {
            return_type = 1;
        }
        return WEEK_TYPES[return_type][serial_number.getDay()];
    };

    _g.ISOWEEKNUM = function(date) {
        date = _g.parseDate(date);
        if( !_g.check(date))return _g.error.value;
        date.setHours(0, 0, 0);
        date.setDate(date.getDate() + 4 - (date.getDay() || 7));
        var yearStart = new Date(date.getFullYear(), 0, 1);
        return Math.ceil((((date - yearStart) / 86400000) + 1) / 7);
    };

    _g.WEEKNUM = function(serial_number, return_type) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        if (return_type === undefined) {
            return_type = 1;
        }
        if (return_type === 21) {
            return this.ISOWEEKNUM(serial_number);
        }
        var week_start = WEEK_STARTS[return_type];
        var jan = new Date(serial_number.getFullYear(), 0, 1);
        var inc = jan.getDay() < week_start ? 1 : 0;
        jan -= Math.abs(jan.getDay() - week_start) * 24 * 60 * 60 * 1000;
        return Math.floor(((serial_number - jan) / (1000 * 60 * 60 * 24)) / 7 + 1) + inc;
    };

    _g.WORKDAY = function(start_date, days, holidays, weekend) {
        start_date  = _g.parseDate(start_date);
        days        = _g.parseNumber(days);
        if( !_g.check(start_date, days))return _g.error.value;
        start_date.setHours(0);
        start_date.setMinutes(0);
        start_date.setSeconds(0);


        if (days < 0)return _g.error.num;
        if (weekend === undefined) {
            weekend = WEEKEND_TYPES[1];
        } else {
            weekend = WEEKEND_TYPES[weekend];
        }
        if (!(weekend instanceof Array)) {
            return _g.error.value;
        }
        if (holidays === undefined) {
            holidays = [];
        } else if (!(holidays instanceof Array)) {
            holidays = [holidays];
        }
        for (var i = 0; i < holidays.length; i++) {
            holidays[i] = _g.parseDate(holidays[i]);
            if( !_g.check(holidays[i]))return _g.error.value;
        }
        var d = 0;
        while (d < days) {
            start_date.setDate(start_date.getDate() + 1);
            var day = start_date.getDay();
            if (day === weekend[0] || day === weekend[1]) {
                continue;
            }
            for (var j = 0; j < holidays.length; j++) {
                var holiday = holidays[j];
                if (holiday.getDate() === start_date.getDate() &&
                    holiday.getMonth() === start_date.getMonth() &&
                    holiday.getFullYear() === start_date.getFullYear()) {
                        d--;
                        break;
                }
            }
            d++;
        }
        return new Date(start_date).getTime();
    };

    _g.YEAR = function(serial_number) {
        serial_number = _g.parseDate(serial_number);
        if( !_g.check(serial_number))return _g.error.value;
        return serial_number.getFullYear();
    };

    _g.DATEDIF = function(ldt, rdt, type){
        var d2time = rdt;
        var d1time = ldt;

        /* op1 */
        if( ldt instanceof Date ){
            d1time = ldt;
        }
        else if( !isNumber(ldt) ){
            dsrc = (typeof ldt === 'string') ?  ldt.trim() : ldt;
            d1time = new Date(dsrc);
        }

        /* op2 */
        if( rdt instanceof Date ){
            d2time = rdt;
        }
        else if( !isNumber(rdt) ){
            ddst = (typeof rdt === 'string') ?  rdt.trim() : rdt;
            d2time = new Date(ddst);
        }

        if( type === undefined )type = '';
        type = type.toLowerCase();

        /* The difference between the months (days and years are ignored). */
        if( type == 'YM'){
            d1time.setYear(2001);
            d2time.setYear(2001);
            d1time.setDate(1);
            d2time.setDate(1);
            type = 'm';
        }

        /*The difference between the days (months and years are ignored). */
        if( type == 'MD'){
            d1time.setYear(2001);
            d2time.setYear(2001);
            d1time.setMonth(1);
            d2time.setMonth(1);
            type = 'd';
        }

        /* The difference between the days of start_date and end_date. The years of the dates are ignored. */
        if( type == 'MD'){
            d1time.setYear(2001);
            d2time.setYear(2001);
            type = 'd';
        }
		
		var yy = (d2time.getYear() - d1time.getYear())|0;
		var mm = (d2time.getMonth() - d1time.getMonth())|0;
		
		if( mm==0 && d2time.getDate() < d1time.getDate() ){
			// this month is not complete, revert to one less.
			//
			mm --;
		}

		// add the completed year in terms of month to the mm
		//
		mm += yy*12;
		
		if( type=='Y' || type=='y' )return (mm/12)|0;
		if( type=='M' || type=='m' )return mm;
		
        /* difference in milli seconds */
        var ms = d2time.getTime() - d1time.getTime();

		/* convert the difference to the expected format */
        //if( type=='Y' || type=='y' )return Math.floor(ms / (1000*60*60*24*365.25));
		//if( type=='M' || type=='m' )return Math.floor( (ms / ((1000*60*60*24) *  30.4375)));
		
		// works only from jan-01-1970
		//
		if( type=='D' || type=='d' )return Math.floor(ms / (1000*60*60*24));
        return ms;
    };



    _g.ACCRINT = function(issue, first, settlement, rate, par, frequency, basis) {
         // Return error if either date is invalid
         rate       = _g.parseNumber(rate);
         par        = _g.parseNumber(par);
         frequency  = _g.parseNumber(frequency);
         basis      = _g.parseNumber(basis);

         issue      = _g.ensureDate(issue);
         first      = _g.ensureDate(first);
         settlement = _g.ensureDate(settlement);
         if (!_g.validDate(issue) || !_g.validDate(first) || !_g.validDate(settlement))return '#VALUE!';

         // Return error if either rate or par are lower than or equal to zero
         if (rate <= 0 || par <= 0)return _g.error.num;

         // Return error if frequency is neither 1, 2, or 4
         if ([1, 2, 4].indexOf(frequency) === -1)return _g.error.num;

         // Return error if basis is neither 0, 1, 2, 3, or 4
         if ([0, 1, 2, 3, 4].indexOf(basis) === -1)return _g.error.num;

         // Return error if settlement is before or equal to issue
         if (settlement <= issue)return _g.error.num;

         // Set default values
         par   = par   || 0;
         basis = basis || 0;


         // Compute accrued interest
         return par * rate * _g.YEARFRAC(issue, settlement, basis);
    };

    _g.isLeapYear = function(year) {
        return new Date(year, 1, 29).getMonth() === 1;
    };

    _g.daysBetween = function(start_date, end_date) {
        return Math.ceil((end_date - start_date) / 1000 / 60 / 60 / 24);
    }

    _g.YEARFRAC = function(start_date, end_date, basis) {
        start_date  = _g.parseDate(start_date);
        end_date    = _g.parseDate(end_date);
        if( !_g.check(start_date, end_date))return _g.error.value;

        if( start_date > end_date ){
            var tmp = end_date;
            end_date = start_date;
            start_date = tmp;
        }


        basis = basis || 0;
        var sd = start_date.getDate();
        var sm = start_date.getMonth() + 1;
        var sy = start_date.getFullYear();
        var ed = end_date.getDate();
        var em = end_date.getMonth() + 1;
        var ey = end_date.getFullYear();

        switch (basis) {
        case 0:
            // US (NASD) 30/360
            if (sd === 31 && ed === 31) {
                sd = 30;
                ed = 30;
            } else if (sd === 31) {
                sd = 30;
            } else if (sd === 30 && ed === 31) {
                ed = 30;
            }
            return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
        case 1:
            // Actual/actual
            var feb29Between = function(date1, date2) {
                var year1 = date1.getFullYear();
                var mar1year1 = new Date(year1, 2, 1);
                if (_g.isLeapYear(year1) && date1 < mar1year1 && date2 >= mar1year1) {
                    return true;
                }
                var year2 = date2.getFullYear();
                var mar1year2 = new Date(year2, 2, 1);
                return (_g.isLeapYear(year2) && date2 >= mar1year2 && date1 < mar1year2);
            };
            var ylength = 365;
            if (sy === ey || ((sy + 1) === ey) && ((sm > em) || ((sm === em) && (sd >= ed)))) {
                if ((sy === ey && _g.isLeapYear(sy)) ||
                    feb29Between(start_date, end_date) ||
                    (em === 1 && ed === 29)) {
                        ylength = 366;
                }
                return _g.daysBetween(start_date, end_date) / ylength;
            }
            var years = (ey - sy) + 1;
            var days = (new Date(ey + 1, 0, 1) - new Date(sy, 0, 1)) / 1000 / 60 / 60 / 24;
            var average = days / years;
            return _g.daysBetween(start_date, end_date) / average;
        case 2:
            // Actual/360
            return _g.daysBetween(start_date, end_date) / 360;
        case 3:
            // Actual/365
            return _g.daysBetween(start_date, end_date) / 365;
        case 4:
            // European 30/360
            return ((ed + em * 30 + ey * 360) - (sd + sm * 30 + sy * 360)) / 360;
        }
    };

    _g.IRR = function(values, guess) {
        guess = guess || 0;

        //values = utils.parseNumberArray(utils.flatten(values));
        values = _g.tableToArray(values, true);
        if( typeof values != 'object' ){
            console.log("irr expected first paramter to be array");
            return _g.error.ref;
        }

        guess = _g.parseNumber(guess);
        if( guess==_g.error.value ) {
            return _g.error.value;
        }

        // Calculates the resulting amount
        var irrResult = function(values, dates, rate) {
            var r = rate + 1;
            var result = values[0];
            for (var i = 1; i < values.length; i++) {
                result += values[i] / Math.pow(r, (dates[i] - dates[0]) / 365);
            }
            return result;
        };

      // Calculates the first derivation
        var irrResultDeriv = function(values, dates, rate) {
            var r = rate + 1;
            var result = 0;
            for (var i = 1; i < values.length; i++) {
                var frac = (dates[i] - dates[0]) / 365;
                result -= frac * values[i] / Math.pow(r, frac + 1);
            }
            return result;
        };

      // Initialize dates and check that values contains at least one positive value and one negative value
        var dates = [];
        var positive = false;
        var negative = false;
        for (var i = 0; i < values.length; i++) {
            dates[i] = (i === 0) ? 0 : dates[i - 1] + 365;
            if (values[i] > 0) {
                positive = true;
            }
            if (values[i] < 0) {
                negative = true;
            }
        }

      // Return error if values does not contain at least one positive value and one negative value
        if (!positive || !negative) {
            return _g.error.num;
        }

        // Initialize guess and resultRate
        guess = (guess === undefined) ? 0.1 : guess;
        var resultRate = guess;

        // Set maximum epsilon for end of iteration
        var epsMax = 1e-10;

        // Implement Newton's method
        var newRate, epsRate, resultValue;
        var contLoop = true;
        do {
            resultValue = irrResult(values, dates, resultRate);
            newRate = resultRate - resultValue / irrResultDeriv(values, dates, resultRate);
            epsRate = Math.abs(newRate - resultRate);
            resultRate = newRate;
            contLoop = (epsRate > epsMax) && (Math.abs(resultValue) > epsMax);
        } while (contLoop);

        // Return internal rate of return
        return resultRate;
    };


    _g.FV = function(rate, periods, payment, value, type) {

        value = value || 0;
        type = type || 0;

        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        payment = _g.parseNumber(payment);
        value   = _g.parseNumber(value);
        type    = _g.parseNumber(type);
        if( rate==_g.error.value || periods==_g.error.value || payment == _g.error.value || value == _g.error.value || type == _g.error.value) {
            return _g.error.value;
        }

        // Return future value
        var result;
        if (rate === 0) {
            result = value + payment * periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = value * term + payment * (1 + rate) * (term - 1) / rate;
            } else {
                result = value * term + payment * (term - 1) / rate;
            }
        }
        return -result;
    };

    _g.FVSCHEDULE = function(principal, schedule) {
        principal = _g.parseNumber(principal);
        schedule = _g.tableToArray(schedule,true);
        if( principal==_g.error.value) {
            return _g.error.value;
        }
        var n = schedule.length;
        var future = principal;
        for (var i = 0; i < n; i++) {
            future *= 1 + schedule[i];
        }
        return future;
    };

    _g.CUMIPMT = function(rate, periods, value, start, end, type) {
        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        value   = _g.parseNumber(value);
        if( rate==_g.error.value || periods==_g.error.value || value == _g.error.value) {
            return _g.error.value
        }

        // Return error if either rate, periods, or value are lower than or equal to zero
        if (rate <= 0 || periods <= 0 || value <= 0) {
            return error.num;
        }

        // Return error if start < 1, end < 1, or start > end
        if (start < 1 || end < 1 || start > end) {
            return error.num;
        }

        // Return error if type is neither 0 nor 1
        if (type !== 0 && type !== 1) {
            return error.num;
        }

        // Compute cumulative interest
        var payment = _g.PMT(rate, periods, value, 0, type);
        var interest = 0;

        if (start === 1) {
            if (type === 0) {
                interest = -value;
                start++;
            }
        }

        for (var i = start; i <= end; i++) {
            if (type === 1) {
                interest += _g.FV(rate, i - 2, payment, value, 1) - payment;
            } else {
                interest += _g.FV(rate, i - 1, payment, value, 0);
            }
        }
        interest *= rate;

        // Return cumulative interest
        return interest;
    };


    _g.PMT = function(rate, periods, present, future, type) {
        future = future || 0;
        type = type || 0;
        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);

        if( rate==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value ) {
            return _g.error.value;
        }

        var result;
        if (rate === 0) {
            result = (present + future) / periods;
        } else {
            var term = Math.pow(1 + rate, periods);
            if (type === 1) {
                result = (future * rate / (term - 1) + present * rate / (1 - 1 / term)) / (1 + rate);
            } else {
                result = future * rate / (term - 1) + present * rate / (1 - 1 / term);
            }
        }
        return -result;
    };

    _g.IPMT = function(rate, period, periods, present, future, type) {
        future = future || 0;
        type = type || 0;

        rate    = _g.parseNumber(rate);
        period  = _g.parseNumber(period);
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);
        if( rate==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value ) {
            return _g.error.value;
        }

        // Compute payment
        var payment = _g.PMT(rate, periods, present, future, type);

        // Compute interest
        var interest;
        if (period === 1) {
            if (type === 1) {
                interest = 0;
            } else {
                interest = -present;
            }
        } else {
            if (type === 1) {
                interest = _g.FV(rate, period - 2, payment, present, 1) - payment;
            } else {
                interest = _g.FV(rate, period - 1, payment, present, 0);
            }
        }
        return interest * rate;
    };

    _g.PPMT = function(rate, period, periods, present, future, type) {
        future = future || 0;
        type = type || 0;

        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);
        if( rate==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value ) {
            return _g.error.value;
        }

        return _g.PMT(rate, periods, present, future, type) - _g.IPMT(rate, period, periods, present, future, type);
    };

    _g.RATE = function(periods, payment, present, future, type, guess) {
        guess = (guess === undefined) ? 0.01 : guess;
        future = (future === undefined) ? 0 : future;
        type = (type === undefined) ? 0 : type;

        periods = _g.parseNumber(periods);
        payment = _g.parseNumber(payment);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        type    = _g.parseNumber(type);
        guess   = _g.parseNumber(guess);

        if( payment==_g.error.value || periods==_g.error.value || present==_g.error.value || future==_g.error.value || type==_g.error.value || guess ==_g.error.value ) {
            return _g.error.value;
        }

        var epsMax = 1e-10;     // Set maximum epsilon for end of iteration
        var iterMax = 50;       // Set maximum number of iterations

        var y, y0, y1, x0, x1 = 0,  // Implement Newton's method
        f = 0,
        i = 0;
        var rate = guess;
        if (Math.abs(rate) < epsMax) {
            y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
        } else {
            f = Math.exp(periods * Math.log(1 + rate));
            y = present * f + payment * (1 / rate + type) * (f - 1) + future;
        }
        y0 = present + payment * periods + future;
        y1 = present * f + payment * (1 / rate + type) * (f - 1) + future;
        i = x0 = 0;
        x1 = rate;
        while ((Math.abs(y0 - y1) > epsMax) && (i < iterMax)) {
            rate = (y1 * x0 - y0 * x1) / (y1 - y0);
            x0 = x1;
            x1 = rate;
            if (Math.abs(rate) < epsMax) {
                y = present * (1 + periods * rate) + payment * (1 + rate * type) * periods + future;
            } else {
                f = Math.exp(periods * Math.log(1 + rate));
                y = present * f + payment * (1 / rate + type) * (f - 1) + future;
            }
            y0 = y1;
            y1 = y;
            ++i;
        }
        return rate;
    };


    _g.ISPMT = function(rate, period, periods, value) {
        rate    = -g.parseNumber(rate);
        period  = _g.parseNumber(period);
        periods = _g.parseNumber(periods);
        value   = _g.parseNumber(value);
        if( rate==_g.error.value || period==_g.error.value || periods==_g.error.value || value==_g.error.value ) {
            return _g.error.value;
        }

        return value * rate * (period / periods - 1);
    };

    _g.NPV = function() {
        args = _g.argsToArray(arguments, true);


        var rate = args[0];
        var value = 0;
        // Loop on all values
        for (var j = 1; j < args.length; j++) {
            value += args[j] / Math.pow(1 + rate, j);
        }
        return value;
    };

    _g.MIRR = function(values, finance_rate, reinvest_rate) {
        values = _g.tableToArray(values, true);
        finance_rate    = _g.parseNumber(finance_rate);
        reinvest_rate   = _g.parseNumber(reinvest_rate);
        if( finance_rate==_g.error.value || reinvest_rate==_g.error.value) {
            return _g.error.value;
        }

        var n = values.length;
        // Lookup payments (negative values) and incomes (positive values)
        var payments = [];
        var incomes = [];
        for (var i = 0; i < n; i++) {
            if (values[i] < 0) {
                payments.push(values[i]);
            } else {
                incomes.push(values[i]);
            }
        }
        var num = -_g.NPV(reinvest_rate, incomes) * Math.pow(1 + reinvest_rate, n - 1);
        var den = _g.NPV(finance_rate, payments) * (1 + finance_rate);
        return Math.pow(num / den, 1 / (n - 1)) - 1;
    };


    _g.RRI = function(periods, present, future) {
        periods = _g.parseNumber(periods);
        present = _g.parseNumber(present);
        future  = _g.parseNumber(future);
        if( periods==_g.error.value || present==_g.error.value || future ==_g.error.value) {
            return _g.error.value;
        }

        // Return error if periods or present is equal to 0 (zero)
        if (periods === 0 || present === 0) {
            return _g.error.num;
        }
        // Return equivalent interest rate
        return Math.pow(future / present, 1 / periods) - 1;
    };

    _g.SLN = function(cost, salvage, life) {
        cost    = _g.parseNumber(cost);
        salvage = _g.parseNumber(salvage);
        life    = _g.parseNumber(life);
        if( cost==_g.error.value || salvage==_g.error.value || life ==_g.error.value) {
            return _g.error.value;
        }
        if (life === 0) {
            return _g.error.num;
        }
        return (cost - salvage) / life;
    };

    _g.SYD = function(cost, salvage, life, period) {
        cost    = _g.parseNumber(cost);
        salvage = _g.parseNumber(salvage);
        life    = _g.parseNumber(life);
        period  = _g.parseNumber(period);

        if( !_g.check(cost, salvage, life, period))return _g.error.value;

        if (life === 0) {
            return _g.error.num;
        }
        if (period < 1 || period > life) {
            return _g.error.num;
        }
        period = parseInt(period, 10);
        return ((cost - salvage) * (life - period + 1) * 2) / (life * (life + 1));
    };

    _g.TBILLEQ = function(settlement, maturity, discount) {
        settlement = _g.parseDate(settlement);
        maturity = _g.parseDate(maturity);
        discount = _g.parseNumber(discount);

        if( !_g.check(settlement, maturity, discount))return _g.error.value;
        if (discount <= 0 || settlement > maturity ) {
            return _g.error.num;
        }
        if (maturity - settlement > 365 * 24 * 60 * 60 * 1000) {
            return _g.error.num;
        }
        return (365 * discount) / (360 - discount * dateTime.DAYS360(settlement, maturity, false));
    };

    _g.EFFECT = function(rate, periods) {
        rate    = _g.parseNumber(rate);
        periods = _g.parseNumber(periods);
        if( !_g.check(rate, period))return _g.error.value;

        if (rate <= 0 || periods < 1) {
            return _g.error.num;
        }
        periods = parseInt(periods, 10);
        return Math.pow(1 + rate / periods, periods) - 1;
    };
	

    _g.CHOOSE = function(){
        if (arguments.length < 2)return _g.error.na;
        var index_num = _g.parseNumber(arguments[0]);

        if( !_g.check(index_num) ||  index_num < 1 || index_num >= arguments.length )
            return _g.error.value;

        return arguments[index_num];
    }

    _g.COLUMNS = function(arr){
        if( arr == undefined )return _g.error.value;
        if( arr instanceof Array ){
            if( arr[0] instanceof Array )return arr[0].length;
            return arr.length;
        }else if( typeof arr == 'object'){
            return arr.colEnd - arr.col + 1;
        }
        return 1;
    }

    _g.ROWS = function(arr){
        if( arr == undefined )return _g.error.value;
        if( arr instanceof Array ){
            return arr.length;
        }else if( typeof arr == 'object'){
            return arr.rowEnd - arr.row + 1;
        }
        return 1;
    }

    _g.TRANSPOSE = function(arr){
        if( arr instanceof Array ){
            if( !(arr[0] instanceof Array ) )arr = [arr];
            var res = [];
            var cols = arr[0].length;
            var rows = arr.length;
            for( c=0; c<cols; c++) {
                var carr = new Array(rows);
                for( r=0; r<rows; r++ )
                    carr[r] = arr[r][c];
                res.push(carr);
            }
            return res;
        }else if( typeof arr == 'object'){
            var nptg = {};
            nptg.shhet  = arr.aheet;
            nptg.row    = arr.col;
            nptg.rowEnd = arr.colEnd;
            nptg.col    = arr.row;
            nptg.colEnd = arr.rowEnd;
            return nptg;
        }
        return _g.error.value;
    };

    _g.SWITCH = function(){
        var value = arguments[0];
        for( var i=1; i<arguments.length-1; i+=2 ){
            if( value == arguments[i] )return arguments[i+1];
        }
        if( i < arguments.length )return arguments[i];
    };
	
	
	_g.ASC = function(val){
		if( val==undefined || val=='' )return 0;
		return val.charCodeAt(0);
	};
	
	_g.BAHTTEX = function(val){
		val = _g.parseNumber(val);
		if( !_g.check(val) )return _g.error.value;
		if( val == 0 )return "zero";
		//var numDigits = Math.floor(Math.log(number) / Math.LN10 + 1);
		
		return "bahttext not implemented";
	};
	
	_g.CHAR = function(number){
		number = _g.parseNumber(number);
		if( !_g.check(number) )return _g.error.value;
		return String.fromCharCode(number)
	}
	
	_g.CLEAN = function(text) {
		text = text || '';
		var re = /[\0-\x1F]/g;
		return text.replace(re, "");
	};
	
	_g.CODE = function(text) {
		if( typeof text == 'number')text = ''+text;
		text = text || '';
		return text.charCodeAt(0);
	};
	
	_g.CONCATENATE = function(){
        var value = '';
        for( var i=0; i<arguments.length; i++ ){
            if( arguments[i] !== undefined )
				value += _g.numToString(arguments[i]);
        }
        return value;
	};

	_g.DOLLAR = function(number, decimals) {
		decimals	= (decimals === undefined) ? 2 : decimals;
		number		= _g.parseNumber(number);
		decimals	= _g.parseNumber(decimals);
		if( !_g.check(number, decimals) ) {
			return _g.error.value;
		}
		var format = '';
		if (decimals <= 0) {
			number = Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
			format = '($0,0)';
		} else if (decimals > 0) {
			format = '($0,0.' + new Array(decimals + 1).join('0') + ')';
		}
		return SSF.format(format, number);
		//return numeral(number).format(format);
	};
	
	_g.EXACT = function(text1, text2) {
		if( typeof text1 == 'string' && typeof text2 == 'string' )
			return text1 === text2;
		return text1 == text2;
	};

	_g.FIND = function(find_text, within_text, position) {
		position = position || 1;
		if( find_text.length==0 )return position;
		if( !within_text )return _g.error.value;
		var idx = within_text.indexOf(find_text, position - 1);
		if( idx<0 )return _g.error.value;
		return idx + 1;
	};

	_g.FIXED = function(number, decimals, no_commas) {
		decimals = (decimals === undefined) ? 2 : decimals;
		no_commas = (no_commas === undefined) ? false : no_commas;

		number		= _g.parseNumber(number);
		decimals	= _g.parseNumber(decimals);
		if( !_g.check(number, decimals)) {
			return error.value;
		}

		var format = no_commas ? '0' : '0,0';
		if (decimals <= 0) {
			number = Math.round(number * Math.pow(10, decimals)) / Math.pow(10, decimals);
		} else if (decimals > 0) {
			format += '.' + new Array(decimals + 1).join('0');
		}
		return SSF.format(format,number);
		//return numeral(number).format(format);
	};

	_g.LEFT = function(text, number) {
		if( _g.checkerr(text) )return text;
		if( _g.checkerr(number) )return number;
		
		text = text || '';
		number = number || 1;
		number = _g.parseNumber(number);
		if( !_g.check(number) || number <0 )return _g.error.value;
		if( number >= text.length )return text;
		return text.substring(0, number);
	};

	_g.LEN = function(text) {
		if (arguments.length === 0) {
			return 0;
		}
		if( text == undefined )
			return 0;
		if (typeof text === 'string') {
			return text ? text.length : 0;
		}
		if (text.length) {
			return text.length;
		}
		return _g.error.value;
	};

	_g.LOWER = function(text) {
		if( text == undefined )return '';
		if (typeof text !== 'string') {
			return _g.error.value;
		}
		return text ? text.toLowerCase() : text;
	};

	_g.MID = function(text, start, number) {
		if( _g.checkerr(text) )return text;
		if( _g.checkerr(start) )return start;
		if( _g.checkerr(number) )return number;

		text = text || '';
		start	= _g.parseNumber(start);
		number	= _g.parseNumber(number);
		
		if( start > text.length )return '';
		
		if( !_g.check(number, start) || start<=0 || number<0 ) {
			return _g.error.value;
		}
		return text.substring(start - 1, start - 1+number);
	};
	
	_g.PROPER = function(text) {
		if (text === undefined || text.length === 0) {
			return _g.error.value;
		}
		if (text === true) {
			text = 'TRUE';
		}
		if (text === false) {
			text = 'FALSE';
		}
		if (isNaN(text) && typeof text === 'number') {
			return _g.error.value;
		}
		if (typeof text === 'number') {
			text = '' + text;
		}

		return text.replace(/\w\S*/g, function(txt) {
			return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
		});
	};

	_g.REPLACE = function(text, position, length, new_text) {
		position	= _g.parseNumber(position);
		length		= _g.parseNumber(length);
		if( !_g.check(position, length) ||
			typeof text !== 'string' ||
			typeof new_text !== 'string') {
			return _g.error.value;
		}
		return text.substr(0, position - 1) + new_text + text.substr(position - 1 + length);
	};

	_g.REPT = function(text, number) {
		number = _g.parseNumber(number);
		if( !_g.check(number) ){
			return _g.error.value;
		}
		return new Array(number + 1).join(text);
	};

	_g.RIGHT = function(text, number) {
		if( _g.checkerr(text) )return text;
		if( _g.checkerr(number) )return number;

		if( number == 0 )return '';
		
		number = number || 1;
		number = _g.parseNumber(number);
		
		if( !_g.check(number) || number<0 ){
			return _g.error.value;
		}
		
		if( number >= text.length )return text;
		
		return text ? text.substring(text.length - number) : null;
	};

	_g.SEARCH = function(find_text, within_text, position) {
		if (typeof find_text !== 'string' || typeof within_text !== 'string') {
			return _g.error.value;
		}
		position = (position === undefined) ? 0 : position;
		return within_text.toLowerCase().indexOf(find_text.toLowerCase(), position - 1) + 1;
	};

	_g.SPLIT = function (text, separator) {
		return text.split(separator);
	};

	_g.SUBSTITUTE = function(text, old_text, new_text, occurrence) {
		if (!text || !old_text || !new_text) {
			return text;
		} else if (occurrence === undefined) {
			return text.replace(new RegExp(old_text, 'g'), new_text);
		} else {
			var index = 0;
			var i = 0;
			while (text.indexOf(old_text, index) > 0) {
				index = text.indexOf(old_text, index + 1);
				i++;
				if (i === occurrence) {
					return text.substring(0, index) + new_text + text.substring(index + old_text.length);
				}
			}
		}
		return text;
	};
	_g.T = function(value) {
		return (typeof value === "string") ? value : '';
	};

	_g.TEXT = function(value, format) {
		if( value instanceof Date )
			return _g.formatDate(value, format);
		value = _g.parseNumber(value);
		if(!_g.check(value)) {
			return _g.error.na;
		}
		return SSF.format(format, +value);
		//return numeral(value).format(format);
	};

	_g.TRIM = function(text) {
		if (typeof text !== 'string') {
			return _g.error.value;
		}
		return text.replace(/ +/g, ' ').trim();
	};

	_g.UPPER = function(text) {
		if (typeof text !== 'string') {
			return _g.error.value;
		}
		return text.toUpperCase();
	};

	_g.VALUE = function(text) {
		if (typeof text !== 'string') {
			return text; //_g.error.value;
		}
		if( text.indexOf('%')==text.length-1 ){
			text = text.substring(0, text.indexOf('%'));
			return _g.parseNumber(text)/100.0;
		}
			
		return _g.parseNumber(text);
		//return numeral().unformat(text);
	};
	
	_g.ROW = function(ref, arrayFormula){

		if( !ref ){
		    console.log('ERROR: ROW() not implemented');
		    return 0;
		}

		if( typeof ref === 'object' ){
		    if( ref.row == ref.rowEnd || !arrayFormula )
		        return +ref.row+1;
		    var ret = [];
		    for(var i=ref.row; i<=ref.rowEnd; i++)ret.push(i+1);
		    return ret;
		}
		if( typeof ref === 'string' ){
            if( ref.indexOf('_')>0 ){
                var parts = ref.split('_');
				if( parts.length == 3 )
					return +parts[1]+1; //our row is zero based
            }
			
			if( ref.indexOf('!')>0 ){
				ref = ref.substring(ref.indexOf('!')+1);
			}
			
			var c = 0, r = 0;
			var a = 'a'.charCodeAt(0);
			var A = 'A'.charCodeAt(0);

			for (var i = 0, len = ref.length; i < len; i++) {
				var code = ref.charCodeAt(i);

				if( ref[i]=='$' )
					continue;
				else if( ref[i]>='a' && ref[i]<='z' )
					c = c * 26 + (code-'a'.charCodeAt(0));
				else if( ref[i]>='A' && ref[i]<='Z' )
					c = c * 26 + (code-'A'.charCodeAt(0));
				else{
					r = _g.parseNumber(ref.substring(i));
					return r;
				}
			}
		}

		return 0;
	};

	_g.excelDate = function(inDate){
		var ret = 25569.0 + ((inDate.getTime() - (inDate.getTimezoneOffset() * 60 * 1000)) / (1000 * 60 * 60 * 24));
		return +ret.toString().substr(0,20);
	};
	
	_g.formatDate = function(dt, format){
		if( !(dt instanceof Date) ){
			dt = _g.parseDate(dt);
		}
		return SSF.format(format, _g.excelDate(dt), null, true);
	};
	
	_g.INDIRECT = function(s, ref, type){
		//console.log("indrect: "+s+" "+ref+" "+type);

		if( ref.indexOf('!') > 0 ){
			var names = ref.split('!'), name='';
			if( ref.charAt(0) == "'" )
				name = names[0].substring(1, names[0].length-1).toLowerCase();
			else
				name = names[0].toLowerCase();
			
			for(var i=0; i<sheets.length; i++ ){
				if( sheets[i].toLowerCase() == name){
					s = i;
					break;
				}
			}
			ref = names[1];
		}
		
		//check if we have a name
		
		if( named && named.hasOwnProperty(ref) ){
			var cref = named[ref];
			
			//if its already a aptg, just re	turn that
			//
			if( cref instanceof Object ){
				return cref;
			}
			
			if( (typeof cref == 'string') && cref.indexOf('_')>0 ){
				if(xl2g){
					if( _g.states[cref] < this.evalCount )//-rr jul-27-2016
						xl2g.evaluateCell(cref);
				}
				return data[cref];
			}
			
			if( _g.parseNumber(cref)>=0 ){
				cref = _g.parseNumber(cref)|0;
				if( cref>=0 && cref<aptg.length ){
					if(xl2g)xl2g.evaluateRange(aptg[cref]);
					return aptg[cref];
				}
			}
			return cref;
		}
		/*
		for(var i=0; i<aptg.length; i++){
			if( aptg[i].name == ref ){
				console.log("indirect: name found "+ref);
				return aptg[i];
			}
		}*/
		
		
		if( type==undefined || type ){
			var c = 0, r = 0, c1=-1, r1=-1;
			var a = 'a'.charCodeAt(0);
			var A = 'A'.charCodeAt(0);
			
			for (var i = 0, len = ref.length; i < len; i++) {
				var code = ref.charCodeAt(i);
				
				if( ref[i]=='$' )
					continue;
				else if( ref[i]==':' ){
					c1 = c;r1 = r-1;
					c = 0;r = 0;
				}
				else if( ref[i]>='a' && ref[i]<='z' )
					c = c * 26 + (code-'a'.charCodeAt(0));
				else if( ref[i]>='A' && ref[i]<='Z' )
					c = c * 26 + (code-'A'.charCodeAt(0));
				else if( ref[i]>='0' && ref[i]<='9' ){
					r = r * 10 + (code-'0'.charCodeAt(0));
				}
			}
			r = r - 1;
			
			if( c1==-1 && r1 == -1 ){
				//console.log("indirect cell "+c+":"+r);
				var cref = s+'_'+r+'_'+c;
				if(xl2g){
					if( _g.states[cref] < this.evalCount )//-rr jul-27-2016
						xl2g.evaluateCell(cref);
				}
				return data[cref];
			}
			//console.log("indirect range "+c1+":"+r1);
			if(xl2g)xl2g.evaluateRange(+s, +r1, +c1, +r, +c);
			return {sheet: s, row: r1, col: c1, rowEnd: r, colEnd: c};
		}
		else{
			var parts = ref.split('C');
			var r = 0, c = 0;
			if( parts.length<=1 ){
				console.log('Invalid indirect reference '+ref);
			}
			else{
				r = _g.parseNumber(parts[0].substring(1))-1;
				c = _g.parseNumber(parts[1])-1;
			}
			var cref = s+'_'+r+'_'+c;
			if(xl2g){
				if( _g.states[cref] < this.evalCount )//-rr jul-27-2016
					xl2g.evaluateCell(cref);
			}
			return data[cref];
		}
	};
	
	
	_g.OFFSET = function(ref, rows, cols, height, width){
		rows	= _g.parseNumber(rows);
		cols	= _g.parseNumber(cols);
		
		if( !_g.check(rows, cols) )return _g.error.value;
		
		if( typeof ref == 'object' ){
			if( height == undefined || height<=0 )height=ref.rowEnd - ref.row;
			if( width == undefined || width <=0 )width = ref.colEnd - ref.col;
			
			if( height>1 || width>1 )
			{
				var area = {sheet: ref.sheet, row: ref.row+rows, col: ref.col+cols, rowEnd: ref.row+rows+height, colEnd: ref.col+cols+width};
				return area;
			}
			var idx = ref.sheet + '_' + (+ref.row + +rows) + '_' + (+ref.col + +cols);
			return data[idx];
		}
		else{
			if( height == undefined || height<=0 )height=1;
			if( width == undefined || width <=0 )width =1;

			
			var cell = ref.split('_');
			if( cell.length<3 ){
				console.log('invalid reference '+ref);
				return _g.error.value;
			}
			var row = ((cell[1]|0)+rows);
			var col = ((cell[2]|0)+cols);
			if( height>1 || width>1 )
				return {sheet: cell[0], row: row, col: col, rowEnd: row+height-1, colEnd: col+width-1};
			
			var idx = cell[0] + '_' + row + '_' + col;
            if(xl2g){
				if( _g.states[idx] < this.evalCount )
					xl2g.evaluateCell(idx);
			}
			return data[idx];
		}
		
	};
	
	_g.numToCol = function(num){
		var col = '';
		
		num = num-1;
		col = String.fromCharCode(65+(num%26))+col;
		num = (num / 26)>>0;
		
		while( num > 0 ){
			col = String.fromCharCode(64+(num%26))+col;
			num = (num / 26)>>0;
		}
		return col;
	}
	
	_g.ADDRESS = function(row, col, abs_num, a1, sheet){
		var ref = '';
		if( a1 == undefined )a1 = true;
		if( !abs_num || abs_num == 1 ){
			if( a1 )
				ref = '$'+_g.numToCol(col)+'$'+row;
			else
				ref = 'R'+row+'C'+col;
		}
		else if( abs_num == 2 ){
			if( a1 )
				ref = _g.numToCol(col)+'$'+row;
			else
				ref = 'R'+row+'C['+col+']';
		}
		else if( abs_num == 3 ){
			if( a1 )
				ref = '$'+_g.numToCol(col)+row;
			else
				ref = 'R['+row+']C'+col+'';
		}
		else if( abs_num == 4 ){
			if( a1 )
				ref = _g.numToCol(col)+row;
			else
				ref = 'R['+row+']C['+col+']';
		}
		if( sheet ){
			if( sheet.indexOf(' ')>0 || sheet.indexOf('!')>0 || sheet.indexOf('[')>0 || sheet.indexOf(']')>0 )
				ref = "'"+sheet+"'!"+ref;
			else
				ref = ""+sheet+"!"+ref;
		}
		return ref;
	};

	_g.SMALL = function(aptg, k){
	    var arr = aptg;
        if( !(aptg instanceof Array) ){
            arr = _g.tableToArray(aptg, 1);
        }
		if( arr.length==1 && arr[0] instanceof Array )arr = arr[0];
		
        if( k<0 || k>arr.length )return _g.error.num;

        //sort the array till we find k th small value
        //
        arr.sort(function(a,b){return a-b;});
        return arr[k-1];
	}

	
	_g.range = function(s, e){
		console.log("error: range not implemented...");
		console.log(s);
		console.log(e);
	};
	
	_g.numConvert = function(num, from, to, places){
		if( from==10 && !isNumber(num))
			return _g.error.value;

		// for decimal no conversion, prefix is needed
		if( to == 10 ){
			if( from == 2 ){	//make the binary negative if 10th digit is set
				num = ""+num;
				if( num.length>10 )return _g.error.num;
				if( num.length==10 && num[0]=='1' ){
					return parseInt(Array(23).join("1")+num, from)|0;
				}
			}
			return Number(parseInt(""+num, from));
		}

		var hex = Number(parseInt(""+num, from)).toString(to);
		
		if( places != undefined ){
			if( !isNumber(places))return _g.error.value;
			if( hex.length > +places || +places < 0 )return _g.error.num;
			if( hex.length < +places )
				hex = "0000000000".substring(0, +places-hex.length)+hex;
		}
		return hex;
	};
	
	_g.BIN2DEC = function(num){
		return _g.numConvert(num, 2, 10);
	}
	_g.BIN2HEX = function(num, places){
		return _g.numConvert(num, 2, 16, places);
	}
	_g.BIN2OCT = function(num, places){
		return _g.numConvert(num, 2, 8, places);
	}

	_g.DEC2BIN = function(num, places){
		return _g.numConvert(num, 10, 2, places);
	}
	_g.DEC2HEX = function(num, places){
		return _g.numConvert(num, 10, 16, places);
	}
	_g.DEC2OCT = function(num, places){
		return _g.numConvert(num, 10, 16, places);
	}

	_g.HEX2BIN = function(num, places){
		return _g.numConvert(num, 16, 2, places);
	}
	_g.HEX2DEC = function(num){
		return _g.numConvert(num, 16, 10);
	}
	_g.HEX2OCT = function(num, places){
		return _g.numConvert(num, 16, 8, places);
	}

	_g.OCT2BIN = function(num, places){
		return _g.numConvert(num, 8, 2, places);
	}
	_g.OCT2DEC = function(num){
		return _g.numConvert(num, 8, 10);
	}
	_g.OCT2HEX = function(num, places){
		return _g.numConvert(num, 8, 16, places);
	}


})();



var createXl2g = function(){
    this.srcElements = [];
    this.tarElements = [];
    this.evalCount   = 0;
    this.updtCount   = 0;
    xl2g = this;

	this.evaluateRange = function(sheet, sr, sc, er, ec){
		var rid = 'r'+sheet+'_'+sr+'_'+sc+'_'+er+'_'+ec;
		if( _g.states[rid] == this.evalCount )
			return;
		_g.states[rid] = this.evalCount;
		
		for(var r=+sr; r<=+er; r++){
			rid = sheet+"_"+r+"_";
			for(var c=+sc; c<=+ec; c++){
				var tid = rid+c;
				if( _g.states[tid] < this.evalCount )
					this.evaluateCell(tid);
			}
		}
	}

    this.evaluateCell = function(id){

		if( typeof _g['calc'+id] == 'function' ){
			this.updtCount ++;
			_g.states[id] = this.evalCount;

			/* if we have source cells for this cell, we must evaluate them first */
			var src = srcs[id];
			//if( srcs.hasOwnProperty(id) ){
			if( src!==undefined ){
			    var slen = src.length;
				//for(var i in src ){
				for( var i=0; i<slen; i++){
					/* if this src has already been evaluated don't do it again */
                    var cid = src[i];
                    if( typeof cid == "string" ){
                        /*if(!_g.states.hasOwnProperty(cid))
                            console.log(cid+' not found in states');
                        else*/ if( _g.states[cid] < this.evalCount )
                            this.evaluateCell(cid);
                    }
                    else{
						this.evaluateRange(+cid.s, +cid.sr, +cid.sc, +cid.er, +cid.ec);						
						/*
                        for(var r=cid.sr; r<=cid.er; r++){
                            var rid = cid.s+"_"+r+"_";
                            for(var c=cid.sc; c<=cid.ec; c++){
                                var tid = rid+c;
                                /~*if(!_g.states.hasOwnProperty(tid)){
                                    if( typeof _g['calc'+tid] == 'function' )
                                        console.log(id+' not found in states');
                                }
                                else*~/ if( _g.states[tid] < this.evalCount )
                                    this.evaluateCell(tid);
                            }
                        }*/
                    }
				}
			}

			/* now that all sources have been updated we can evaluate this cell */
            _g['calc'+id]();
        }
		else{
			// make the state very high so that it never gets executed
			//
			if( _g.states.hasOwnProperty(id) )_g.states[id] = 1000000;
		}
    }

    this.setCellValue = function(cellId, value){
        data[cellId] = value;
        this.evalAllTargets();
    }
    this.setCellValueAsDate = function(cellId, value){
        var d = new Date(value);
        this.setCellValue(cellId, d.getTime());
    }

    this.onInputChange = function(elem){
		//console.log(elem)
        if( elem==null || elem.id == undefined )return;
		if(elem.type=="date")
		{
		    data[elem.id] = new Date(elem.value);
			//var d1 = new Date(elem.value);
			//d1time = d1.getTime();
			//data[elem.id] = d1time;
		}
		else
		{
			var fmt;
			/* if( elem.hasOwnProperty('dataset') && elem.dataset.hasOwnProperty("fmt") ){
				fmt = elem.dataset.fmt;
			}
			else if( elem.hasOwnProperty('data-fmt') ){
				fmt = elem['data-fmt'];
			} */
			/************************************Added By Pankaj To resolve Adnroid v 4.2.2 issue***********************************/
			if( elem.getAttribute('fmt') ){
				fmt = elem.getAttribute('fmt');
			}
			else if( elem.getAttribute('data-fmt') ){
				fmt = elem.getAttribute('data-fmt');
			}
			
			if( fmt && fmt.indexOf('%')>0 ){
				if( elem.value.indexOf('%')>0 )
					data[elem.id] = +elem.value.substr(0, elem.value.length-1)/100;
				else
					data[elem.id] = +elem.value;
			}
		    else if( isNumber(elem.value) )
		        data[elem.id] = +elem.value;
			else
			    data[elem.id] = elem.value;
		}
        //data[elem.id] = elem.value;
        this.evalAllTargets();  /* evaluate all the targets */
    }

    /* add an element to the list of source elements */
    this.addElementToSource = function(elem){
        if( elem == null )return;
        /* validate id format */
        if( elem.id == undefined )return;
        if( isNaN(parseInt(elem.id, 10)) )return;

        this.srcElements.push( elem.id );
        _g.dcache[elem.id] = elem;

        /* populate the element with the default value */
		if( data[elem.id] !== undefined && elem.value.indexOf('%')<0)
			elem.value = data[elem.id];

        /* setup an onchange script */
        var self = this;
        elem.onchange = function(){
            self.onInputChange(this);
        };
    }

    /* add an element to the list of target elements */
    this.addElementToTarget = function(elem){
        if( elem == null )return;
        /* validate id format */

        if( elem.id == undefined )
            return;

        if( isNaN(parseInt(elem.id, 10)) )
            return;

		/* oct-05-2015 for xlapp table td */
		if( elem.id.split('_').length != 3 )
			return;

        /* make sure this is not part of the source */
        if( this.srcElements.indexOf(elem.id) >=0 )
            return;

        this.tarElements.push( elem.id );
        _g.dcache[elem.id] = elem;
    }


    this.findInputs = function(){
        /*
        var elems = document.getElementsByTagName('select');
        for(var i in elems )this.addElementToSource( elems[i] );
        elems = document.getElementsByTagName('input');
        for(var i in elems )this.addElementToSource( elems[i] );
        */
        var elems = document.querySelectorAll('select,input');
        for(var i in elems )this.addElementToSource( elems[i] );
    }

    this.findTargets = function(){
        //var elems = document.getElementsByTagName("*");
        var elems = document.querySelectorAll('span');
        for( var i in elems ){
            if( elems[i].id )
                this.addElementToTarget(elems[i]);
        }
		elems = document.querySelectorAll('td');
        for( var i in elems ){
            if( elems[i].id )
                this.addElementToTarget(elems[i]);
        }
		
    }

    this.prepareCells = function(){
        var ts = performance.now();
        var count = 0;
        for( var key in srcs ){
            if( !srcs.hasOwnProperty(key) )continue;
            var slen = srcs[key].length;
            for( var i=0; i<slen; i++){
                var cid = srcs[key][i];
                if( typeof cid == "string" ){
                    if( !_g.states.hasOwnProperty(cid)){
                        _g.states[cid]=0;count++;
                    }
                }
                else{
                    for(var r=cid.sr; r<=cid.er; r++){
                        for(var c=cid.sc; c<=cid.ec; c++){
                            if( !_g.states.hasOwnProperty(cid.s+"_"+r+"_"+c)){
                                _g.states[cid.s+"_"+r+"_"+c]=0;count ++;
                            }
                        }
                    }
                }
            }
        }
        console.log("intialized "+count+" sources in "+(performance.now()-ts)+" ms")
        //console.log(" total "+Object.keys(_g.states).length);
    }

    this.prepareCells1 = function(){
        var count = 0;
        var silen;
        var slen = srcs.length;
        for(var i=0; i<slen; i++){
            //this.cellState[i] = 0;
            silen = srcs[i].length|0;

            for( var j=0; j<silen; j++){
                var cid = srcs[i][j];
                if( typeof cid == "string" ){
                    //if(!this.cellState.hasOwnProperty(cid)) count ++;
                    //this.cellState[cid] = 0;
                    _g.states[cid]=0;
                    count ++;
                }
                else{
                    for(var r=+cid.sr; r<=+cid.er; r++){
                        for(var c=+cid.sc; c<=+cid.ec; c++){
                            var id = cid.s+"_"+r+"_"+c;
                            //if(!this.cellState.hasOwnProperty(id)) count ++;
                            //this.cellState[id] = 0;
                            _g.states[id]=0;
                            count ++;
                        }
                    }
                }
            }
        }
        console.log("intialized "+count+" sources");
    }

    this.evalAllTargets = function(){
		var start = new Date().getTime();

        /* all cells need to be evaluated only once. Use this evalCOunt as controller */
        this.evalCount ++;
        this.updtCount = 0;
		_g.evalCount = this.evalCount;
		
        var depElem;
        for( var i in this.tarElements){
            var id = this.tarElements[i];
			if( _g.states[id] < this.evalCount )//-rr jul-27-2016
				this.evaluateCell(id);

            /* update the value back to DOM */
            //if( !_g.dcache.hasOwnProperty(id) ){
			if( _g.dcache[id]===undefined ){
                _g.dcache[id] = document.getElementById(id);
            }

            depElem = _g.dcache[id];
            if( depElem ){
				var val = data[id];
				var fmt = '';
				try{
					if( depElem.dataset && depElem.dataset.hasOwnProperty("fmt") ){
						fmt = depElem.dataset.fmt;
					}
					else if( depElem.hasOwnProperty('data-fmt') ){
						fmt = dcepElem['data-fmt'];
					}
				}catch(err){
				}

				if( val instanceof Date ){
					if( fmt ){
						val = SSF.format(fmt, val);
					}
					else{
						val = val.getTime();
					}
				}
                else if( isNumber(val) ){
					if( fmt ){
						val = SSF.format(fmt, val);
					}
					else{
						val = _g.numToString(val);//SSF.format("0.00", Number(val.toFixed(5)));
					}
                }

				if( val === undefined )
					depElem.innerHTML = '';
				else
					depElem.innerHTML = val;
            }
        }
		var calcTime = ((new Date().getTime())-start);
		start = new Date().getTime();
		doValidations();
		var reloadTime= ((new Date().getTime())-start);

        console.log("calculated "+this.updtCount+" cells in "+calcTime+" ms ["+reloadTime+"]");
		$('#out').empty().append("calculated "+this.updtCount+" cells in "+calcTime+" ms ["+reloadTime+"]");
		$("select#" + segment + "option[value='undefined']").remove();
		/*Added by Pankaj for select segment*/
		if($("#1_7_3").val() == "" || $("#1_7_3").val() == undefined) {
			$('#1_7_3').append($('<option>', {value:'Select Segment', text:'Select Segment'}));
			$("#1_7_3").val("Select Segment").change();
		}
    }

    this.fillTemplate = function(tmpl, options){
        /* each of the option's value should be replaced in the template */
        for( var i in options ){
            varName = "{"+options[i]+"}";
            //tmpl = tmpl.replaceAll(varName, data.hasOwnProperty(varName)?data[varName]:"");
			tmpl = tmpl.replaceAll(varName, data[varName]!==undefined?data[varName]:"");
        }
        for( var i in this.srcElements ){
            varName = "{"+this.srcElements[i]+"}";
            //tmpl = tmpl.replaceAll(varName, data.hasOwnProperty(varName)?data[varName]:"");
			tmpl = tmpl.replaceAll(varName, data[varName]!==undefined?data[varName]:"");
        }
        for( var i in this.tarElements ){
            varName = "{"+this.tarElements[i]+"}";
            //tmpl = tmpl.replaceAll(varName, data.hasOwnProperty(varName)?data[varName]:"");
			tmpl = tmpl.replaceAll(varName, data[varName]!==undefined?data[varName]:"");
        }
        return tmpl;
    }

    var start = new Date().getTime();
    this.findInputs();
    this.findTargets();
    //this.prepareCells();
    console.log("sources:"+Object.keys(srcs).length);
    console.log("initialized in "+((new Date().getTime())-start)+" ms");
	$('#iout').empty().append("initialized in "+((new Date().getTime())-start)+" ms");

    /* simulate the first change */
    //this.onInputChange(document.getElementById(this.srcElements[0]));
	this.evalAllTargets();

    return this;
}
_g.states={"0_1_21":0,"0_1_22":0,"0_2_0":0,"0_2_21":0,"0_2_22":0,"0_3_0":0,"0_3_21":0,"0_3_22":0,"0_4_0":0,"0_4_21":0,"0_4_22":0,"0_5_0":0,"0_5_21":0,"0_5_22":0,"0_6_0":0,"0_6_21":0,"0_6_22":0,"0_7_0":0,"0_7_21":0,"0_7_22":0,"0_8_0":0,"0_8_21":0,"0_8_22":0,"0_9_0":0,"0_9_21":0,"0_9_22":0,"0_10_0":0,"0_10_21":0,"0_10_22":0,"0_11_0":0,"0_11_21":0,"0_11_22":0,"0_12_0":0,"0_12_21":0,"0_12_22":0,"0_13_0":0,"0_13_21":0,"0_13_22":0,"0_14_0":0,"0_14_21":0,"0_14_22":0,"0_15_0":0,"0_15_21":0,"0_15_22":0,"0_16_0":0,"0_16_21":0,"0_16_22":0,"0_17_0":0,"0_17_21":0,"0_17_22":0,"0_18_0":0,"0_18_21":0,"0_18_22":0,"0_19_0":0,"0_19_21":0,"0_19_22":0,"0_20_0":0,"0_20_21":0,"0_20_22":0,"0_21_0":0,"0_21_21":0,"0_21_22":0,"0_22_0":0,"0_22_21":0,"0_22_22":0,"0_23_0":0,"0_23_21":0,"0_23_22":0,"0_24_0":0,"0_24_21":0,"0_24_22":0,"0_25_0":0,"0_25_21":0,"0_25_22":0,"0_26_0":0,"0_26_21":0,"0_26_22":0,"0_27_0":0,"0_27_21":0,"0_27_22":0,"0_28_0":0,"0_28_21":0,"0_28_22":0,"0_29_0":0,"0_29_21":0,"0_29_22":0,"0_30_0":0,"0_30_21":0,"0_30_22":0,"0_31_0":0,"0_31_21":0,"0_31_22":0,"0_32_0":0,"0_32_21":0,"0_32_22":0,"0_33_0":0,"0_33_21":0,"0_33_22":0,"0_34_0":0,"0_34_21":0,"0_34_22":0,"0_35_0":0,"0_35_21":0,"0_35_22":0,"0_36_0":0,"0_36_21":0,"0_36_22":0,"0_37_0":0,"0_37_21":0,"0_37_22":0,"0_38_0":0,"0_38_21":0,"0_38_22":0,"0_39_0":0,"0_39_21":0,"0_39_22":0,"0_40_0":0,"0_40_21":0,"0_40_22":0,"0_41_0":0,"0_41_21":0,"0_41_22":0,"0_42_0":0,"0_42_21":0,"0_42_22":0,"0_43_0":0,"0_43_21":0,"0_43_22":0,"0_44_0":0,"0_44_21":0,"0_44_22":0,"0_45_0":0,"0_45_21":0,"0_45_22":0,"0_46_0":0,"0_46_21":0,"0_46_22":0,"0_47_0":0,"0_47_21":0,"0_47_22":0,"0_48_0":0,"0_48_21":0,"0_48_22":0,"0_49_0":0,"0_49_21":0,"0_49_22":0,"0_50_0":0,"0_50_21":0,"0_50_22":0,"0_51_0":0,"0_51_21":0,"0_51_22":0,"0_52_0":0,"0_52_21":0,"0_52_22":0,"0_53_0":0,"0_53_21":0,"0_53_22":0,"0_54_0":0,"0_54_21":0,"0_54_22":0,"0_55_0":0,"0_55_21":0,"0_55_22":0,"0_56_0":0,"0_56_21":0,"0_56_22":0,"0_57_0":0,"0_57_21":0,"0_57_22":0,"0_58_0":0,"0_58_21":0,"0_58_22":0,"0_59_0":0,"0_59_21":0,"0_59_22":0,"0_60_0":0,"0_60_21":0,"0_60_22":0,"0_61_0":0,"0_61_21":0,"0_61_22":0,"0_62_0":0,"0_62_21":0,"0_62_22":0,"0_63_0":0,"0_63_21":0,"0_63_22":0,"0_64_0":0,"0_64_21":0,"0_64_22":0,"0_65_0":0,"0_65_21":0,"0_65_22":0,"0_66_0":0,"0_66_21":0,"0_66_22":0,"0_67_0":0,"0_67_21":0,"0_67_22":0,"0_68_0":0,"0_68_21":0,"0_68_22":0,"0_69_0":0,"0_69_21":0,"0_69_22":0,"0_70_0":0,"0_70_21":0,"0_70_22":0,"0_71_0":0,"0_71_21":0,"0_71_22":0,"0_72_0":0,"0_72_21":0,"0_72_22":0,"0_73_0":0,"0_73_21":0,"0_73_22":0,"0_74_0":0,"0_74_21":0,"0_74_22":0,"0_75_0":0,"0_75_21":0,"0_75_22":0,"0_76_0":0,"0_76_21":0,"0_76_22":0,"0_77_0":0,"0_77_21":0,"0_77_22":0,"0_78_0":0,"0_78_21":0,"0_78_22":0,"0_79_0":0,"0_79_21":0,"0_79_22":0,"0_80_0":0,"0_80_21":0,"0_80_22":0,"0_81_0":0,"0_81_21":0,"0_81_22":0,"0_82_0":0,"0_82_21":0,"0_82_22":0,"0_83_0":0,"0_83_21":0,"0_83_22":0,"0_84_0":0,"0_84_21":0,"0_84_22":0,"0_85_0":0,"0_85_21":0,"0_85_22":0,"0_86_0":0,"0_86_21":0,"0_86_22":0,"0_87_0":0,"0_87_21":0,"0_87_22":0,"0_88_0":0,"0_88_21":0,"0_88_22":0,"0_89_0":0,"0_89_21":0,"0_89_22":0,"0_90_0":0,"0_90_21":0,"0_90_22":0,"0_91_0":0,"0_91_21":0,"0_91_22":0,"0_92_0":0,"0_92_21":0,"0_92_22":0,"0_93_0":0,"0_93_21":0,"0_93_22":0,"0_94_0":0,"0_94_21":0,"0_94_22":0,"0_95_0":0,"0_95_21":0,"0_95_22":0,"0_96_0":0,"0_96_21":0,"0_96_22":0,"0_97_0":0,"0_97_21":0,"0_97_22":0,"0_98_0":0,"0_98_21":0,"0_98_22":0,"0_99_0":0,"0_99_21":0,"0_99_22":0,"0_100_0":0,"0_100_21":0,"0_100_22":0,"0_101_0":0,"0_101_21":0,"0_101_22":0,"0_102_0":0,"0_102_21":0,"0_102_22":0,"0_103_0":0,"0_103_21":0,"0_103_22":0,"0_104_0":0,"0_104_21":0,"0_104_22":0,"0_105_0":0,"0_105_21":0,"0_105_22":0,"0_106_0":0,"0_106_21":0,"0_106_22":0,"0_107_0":0,"0_107_21":0,"0_107_22":0,"0_108_0":0,"0_108_21":0,"0_108_22":0,"0_109_0":0,"0_109_21":0,"0_109_22":0,"0_110_0":0,"0_110_21":0,"0_110_22":0,"0_111_0":0,"0_111_21":0,"0_111_22":0,"0_112_0":0,"0_112_21":0,"0_112_22":0,"0_113_0":0,"0_113_21":0,"0_113_22":0,"0_114_0":0,"0_114_21":0,"0_114_22":0,"0_115_0":0,"0_115_21":0,"0_115_22":0,"0_116_0":0,"0_116_21":0,"0_116_22":0,"0_117_0":0,"0_117_21":0,"0_117_22":0,"0_118_0":0,"0_118_21":0,"0_118_22":0,"0_119_0":0,"0_119_21":0,"0_119_22":0,"0_120_0":0,"0_120_21":0,"0_120_22":0,"0_121_0":0,"0_121_21":0,"0_121_22":0,"0_122_0":0,"0_122_21":0,"0_122_22":0,"0_123_0":0,"0_123_21":0,"0_123_22":0,"0_124_0":0,"0_124_21":0,"0_124_22":0,"0_125_0":0,"0_125_21":0,"0_125_22":0,"0_126_0":0,"0_126_21":0,"0_126_22":0,"0_127_0":0,"0_127_21":0,"0_127_22":0,"0_128_0":0,"0_128_21":0,"0_128_22":0,"0_129_0":0,"0_129_21":0,"0_129_22":0,"0_130_0":0,"0_130_21":0,"0_130_22":0,"0_131_0":0,"0_131_21":0,"0_131_22":0,"0_132_0":0,"0_132_21":0,"0_132_22":0,"0_133_0":0,"0_133_21":0,"0_133_22":0,"0_134_0":0,"0_134_21":0,"0_134_22":0,"0_135_0":0,"0_135_21":0,"0_135_22":0,"0_136_0":0,"0_136_21":0,"0_136_22":0,"0_137_0":0,"0_137_21":0,"0_137_22":0,"0_138_0":0,"0_138_21":0,"0_138_22":0,"0_139_0":0,"0_139_21":0,"0_139_22":0,"0_140_0":0,"0_140_21":0,"0_140_22":0,"0_141_0":0,"0_141_21":0,"0_141_22":0,"0_142_0":0,"0_142_21":0,"0_142_22":0,"0_143_0":0,"0_143_21":0,"0_143_22":0,"0_144_0":0,"0_144_21":0,"0_144_22":0,"0_145_0":0,"0_145_21":0,"0_145_22":0,"0_146_0":0,"0_146_21":0,"0_146_22":0,"0_147_0":0,"0_147_21":0,"0_147_22":0,"0_148_0":0,"0_148_21":0,"0_148_22":0,"0_149_0":0,"0_149_21":0,"0_149_22":0,"0_150_0":0,"0_150_21":0,"0_150_22":0,"0_151_0":0,"0_151_21":0,"0_151_22":0,"0_152_0":0,"0_152_21":0,"0_152_22":0,"0_153_0":0,"0_153_21":0,"0_153_22":0,"0_154_0":0,"0_154_21":0,"0_154_22":0,"0_155_0":0,"0_155_21":0,"0_155_22":0,"0_156_0":0,"0_156_21":0,"0_156_22":0,"0_157_0":0,"0_157_21":0,"0_157_22":0,"0_158_0":0,"0_158_21":0,"0_158_22":0,"0_159_0":0,"0_159_21":0,"0_159_22":0,"0_160_0":0,"0_160_21":0,"0_160_22":0,"0_161_0":0,"0_161_21":0,"0_161_22":0,"0_162_0":0,"0_162_21":0,"0_162_22":0,"0_163_0":0,"0_163_21":0,"0_163_22":0,"0_164_0":0,"0_164_21":0,"0_164_22":0,"0_165_0":0,"0_165_21":0,"0_165_22":0,"0_166_0":0,"0_166_21":0,"0_166_22":0,"0_167_0":0,"0_167_21":0,"0_167_22":0,"0_168_0":0,"0_168_21":0,"0_168_22":0,"0_169_0":0,"0_169_21":0,"0_169_22":0,"0_170_0":0,"0_170_21":0,"0_170_22":0,"0_171_0":0,"0_171_21":0,"0_171_22":0,"0_172_0":0,"0_172_21":0,"0_172_22":0,"0_173_0":0,"0_173_21":0,"0_173_22":0,"0_174_0":0,"0_174_21":0,"0_174_22":0,"0_175_0":0,"0_175_21":0,"0_175_22":0,"0_176_0":0,"0_176_21":0,"0_176_22":0,"0_177_0":0,"0_177_21":0,"0_177_22":0,"0_178_0":0,"0_178_21":0,"0_178_22":0,"0_179_0":0,"0_179_21":0,"0_179_22":0,"1_5_25":0,"1_6_3":0,"1_6_4":0,"1_6_25":0,"1_7_3":0,"1_7_4":0,"1_7_25":0,"1_8_3":0,"1_8_4":0,"1_8_25":0,"1_9_3":0,"1_9_4":0,"1_10_3":0,"1_10_4":0,"1_11_2":0,"1_11_3":0,"1_11_4":0,"1_19_3":0,"1_19_4":0,"1_26_3":0,"1_30_1":0,"1_31_13":0,"1_31_14":0,"1_31_16":0,"1_31_19":0,"1_32_2":0,"1_32_13":0,"1_32_14":0,"1_32_16":0,"1_32_19":0,"1_33_2":0,"1_33_13":0,"1_33_14":0,"1_33_16":0,"1_33_19":0,"1_33_23":0,"1_34_2":0,"1_34_13":0,"1_34_14":0,"1_35_2":0,"1_35_13":0,"1_35_14":0,"1_36_2":0,"1_36_13":0,"1_36_14":0,"1_36_16":0,"1_36_19":0,"1_37_13":0,"1_37_16":0,"1_38_23":0,"1_40_1":0,"1_40_2":0,"1_40_4":0,"1_42_4":0,"1_42_9":0,"1_42_14":0,"1_42_19":0,"1_42_23":0,"1_43_4":0,"1_43_9":0,"1_43_14":0,"1_43_17":0,"1_43_19":0,"1_44_4":0,"1_44_9":0,"1_44_14":0,"1_45_2":0,"1_45_4":0,"1_45_9":0,"1_45_14":0,"1_45_19":0,"1_46_4":0,"1_46_7":0,"1_46_9":0,"1_46_14":0,"1_46_19":0,"1_47_4":0,"1_47_9":0,"1_47_14":0,"1_47_19":0,"1_48_4":0,"1_48_9":0,"1_48_14":0,"1_48_19":0,"1_49_4":0,"1_49_9":0,"1_49_14":0,"1_49_19":0,"1_50_4":0,"1_50_9":0,"1_50_14":0,"1_50_19":0,"1_51_4":0,"1_51_9":0,"1_51_14":0,"1_51_19":0,"1_52_4":0,"1_52_9":0,"1_52_14":0,"1_53_4":0,"1_53_9":0,"1_53_14":0,"1_53_19":0,"1_54_4":0,"1_54_9":0,"1_54_14":0,"1_54_19":0,"1_60_19":0,"1_61_19":0,"1_62_19":0,"1_63_19":0,"1_64_19":0,"1_65_19":0,"1_66_19":0,"1_67_19":0,"1_68_4":0,"1_68_19":0,"1_69_4":0,"1_69_19":0,"1_70_4":0,"1_70_19":0,"1_71_4":0,"1_71_19":0,"1_72_4":0,"1_72_19":0,"1_73_4":0,"1_73_19":0,"1_74_4":0,"1_74_19":0,"1_75_19":0,"1_76_19":0,"1_79_29":0,"2_5_1":0,"2_8_1":0,"2_10_1":0,"2_11_1":0,"-1":0}
var data = {"0_0_0":"Sl no",
"0_0_1":"Industry",
"0_0_2":"Segment",
"0_0_3":"Remarks",
"0_0_4":"Manufacturer",
"0_0_5":"Trader",
"0_0_6":"Service",
"0_0_7":"Toxic tag\n (updated as on May'17)",
"0_0_22":"Toxic tag\n (updated as on Oct'16",
"0_1_0":1,
"0_1_1":"Aerospace_and_Defense",
"0_1_2":"Aerospace & Defense equipment",
"0_1_4":0.091251,
"0_1_5":0.094752,
"0_1_6":"NA",
"0_1_7":"Non - Toxic",
"0_1_21":"Aerospace_and_DefenseAerospace & Defense equipment",
"0_1_22":"Non - Toxic",
"0_2_0":2,
"0_2_1":"Agriculture_Primary",
"0_2_2":"Agricultural Products",
"0_2_4":0.057352,
"0_2_5":"NA",
"0_2_6":"NA",
"0_2_7":"Non - Toxic",
"0_2_18":"Aerospace_and_Defense",
"0_2_21":"Agriculture_PrimaryAgricultural Products",
"0_2_22":"Non - Toxic",
"0_3_0":3,
"0_3_1":"Agriculture_Primary",
"0_3_2":"Agriculture - Others",
"0_3_3":"fruits, soya, spices, starches, vegetable, roots, tubers",
"0_3_4":0.055664,
"0_3_5":0.0349908556094128,
"0_3_6":"NA",
"0_3_7":"Non - Toxic",
"0_3_18":"Agriculture_Primary",
"0_3_21":"Agriculture_PrimaryAgriculture - Others",
"0_3_22":"Non - Toxic",
"0_4_0":4,
"0_4_1":"Agriculture_Primary",
"0_4_2":"Tractors & Farm Equipments",
"0_4_4":0.073402,
"0_4_5":0.0393575,
"0_4_6":"NA",
"0_4_7":"Non - Toxic",
"0_4_18":"Automotive_and_Other_Vehicles",
"0_4_21":"Agriculture_PrimaryTractors & Farm Equipments",
"0_4_22":"Non - Toxic",
"0_5_0":5,
"0_5_1":"Agriculture_Primary",
"0_5_2":"Meat, Poultry & Fish",
"0_5_4":"NA",
"0_5_5":0.0303314368351406,
"0_5_6":"NA",
"0_5_7":"Non - Toxic",
"0_5_18":"Aviation",
"0_5_21":"Agriculture_PrimaryMeat, Poultry & Fish",
"0_5_22":"Non - Toxic",
"0_6_0":6,
"0_6_1":"Agriculture_Primary",
"0_6_2":"Forest Products",
"0_6_4":0.0404555,
"0_6_5":0.0304188169730528,
"0_6_6":"NA",
"0_6_7":"Non - Toxic",
"0_6_18":"Chemicals",
"0_6_21":"Agriculture_PrimaryForest Products",
"0_6_22":"Non - Toxic",
"0_7_0":7,
"0_7_1":"Automotive_and_Other_Vehicles",
"0_7_2":"Auto Components and ancilliary",
"0_7_4":0.1065405,
"0_7_5":0.0185725404162606,
"0_7_6":"NA",
"0_7_7":"Non - Toxic",
"0_7_18":"Computers_and_Software",
"0_7_21":"Automotive_and_Other_VehiclesAuto Components and ancilliary",
"0_7_22":"Non - Toxic",
"0_8_0":8,
"0_8_1":"Automotive_and_Other_Vehicles",
"0_8_2":"Automobile Manufacturers - Commercial Vehicles",
"0_8_4":0.038067,
"0_8_5":"NA",
"0_8_6":"NA",
"0_8_7":"Non - Toxic",
"0_8_18":"Construction_and_Real_Estate",
"0_8_21":"Automotive_and_Other_VehiclesAutomobile Manufacturers - Commercial Vehicles",
"0_8_22":"Non - Toxic",
"0_9_0":9,
"0_9_1":"Automotive_and_Other_Vehicles",
"0_9_2":"Automobile Manufacturers - Passenger Vehicles",
"0_9_4":0.038067,
"0_9_5":"NA",
"0_9_6":"NA",
"0_9_7":"Non - Toxic",
"0_9_18":"Consumer_Durables",
"0_9_21":"Automotive_and_Other_VehiclesAutomobile Manufacturers - Passenger Vehicles",
"0_9_22":"Non - Toxic",
"0_10_0":10,
"0_10_1":"Automotive_and_Other_Vehicles",
"0_10_2":"Automotive Dealers",
"0_10_4":"NA",
"0_10_5":0.0393575,
"0_10_6":"NA",
"0_10_7":"Non - Toxic",
"0_10_18":"Consumer_Non_Durables",
"0_10_21":"Automotive_and_Other_VehiclesAutomotive Dealers",
"0_10_22":"Non - Toxic",
"0_11_0":11,
"0_11_1":"Automotive_and_Other_Vehicles",
"0_11_2":"Tyres & Rubber",
"0_11_4":0.0767945,
"0_11_5":0.06,
"0_11_6":"NA",
"0_11_7":"Non - Toxic",
"0_11_18":"Electonics_and_Engineering",
"0_11_21":"Automotive_and_Other_VehiclesTyres & Rubber",
"0_11_22":"Non - Toxic",
"0_12_0":12,
"0_12_1":"Automotive_and_Other_Vehicles",
"0_12_2":"Bicycle Manufacturers",
"0_12_4":0.066113,
"0_12_5":0.0393575,
"0_12_6":"NA",
"0_12_7":"Non - Toxic",
"0_12_18":"FMCG",
"0_12_21":"Automotive_and_Other_VehiclesBicycle Manufacturers",
"0_12_22":"Non - Toxic",
"0_13_0":13,
"0_13_1":"Automotive_and_Other_Vehicles",
"0_13_2":"Two and Three Wheelers",
"0_13_4":0.038067,
"0_13_5":"NA",
"0_13_6":"NA",
"0_13_7":"Non - Toxic",
"0_13_18":"Food_and_Beverage",
"0_13_21":"Automotive_and_Other_VehiclesTwo and Three Wheelers",
"0_13_22":"Non - Toxic",
"0_14_0":14,
"0_14_1":"Automotive_and_Other_Vehicles",
"0_14_2":"Ship Breaking",
"0_14_4":"NA",
"0_14_5":"NA",
"0_14_6":0.026585,
"0_14_7":"Non - Toxic",
"0_14_18":"Gems_and_Jewellery",
"0_14_21":"Automotive_and_Other_VehiclesShip Breaking",
"0_14_22":"Non - Toxic",
"0_15_0":15,
"0_15_1":"Automotive_and_Other_Vehicles",
"0_15_2":"Ship Building",
"0_15_4":0.1603255,
"0_15_5":"NA",
"0_15_6":"NA",
"0_15_7":"Non - Toxic",
"0_15_18":"Health_Care",
"0_15_21":"Automotive_and_Other_VehiclesShip Building",
"0_15_22":"Non - Toxic",
"0_16_0":16,
"0_16_1":"Aviation",
"0_16_2":"Aviation & Ground Handling",
"0_16_4":"NA",
"0_16_5":"NA",
"0_16_6":0.2245435,
"0_16_7":"Non - Toxic",
"0_16_18":"Home_Furnishings_and_Fittings",
"0_16_21":"AviationAviation & Ground Handling",
"0_16_22":"Non - Toxic",
"0_17_0":17,
"0_17_1":"Aviation",
"0_17_2":"Airlines",
"0_17_4":"NA",
"0_17_5":"NA",
"0_17_6":0.044289,
"0_17_7":"Non - Toxic",
"0_17_18":"Media",
"0_17_21":"AviationAirlines",
"0_17_22":"Non - Toxic",
"0_18_0":18,
"0_18_1":"Aviation",
"0_18_2":"Airport Operators",
"0_18_4":"NA",
"0_18_5":"NA",
"0_18_6":0.093489,
"0_18_7":"Non - Toxic",
"0_18_18":"Oil_Petroleum_and_Natural_Gas",
"0_18_21":"AviationAirport Operators",
"0_18_22":"Non - Toxic",
"0_19_0":19,
"0_19_1":"Aviation",
"0_19_2":"Alternative Carriers",
"0_19_4":"NA",
"0_19_5":"NA",
"0_19_6":0.104023,
"0_19_7":"Non - Toxic",
"0_19_18":"Paper_Packaging_and_Publishing",
"0_19_21":"AviationAlternative Carriers",
"0_19_22":"Non - Toxic",
"0_20_0":20,
"0_20_1":"Chemicals",
"0_20_2":"Chemical - Agro Chemicals (Pesticides)",
"0_20_4":0.092045,
"0_20_5":0.0426973202901158,
"0_20_6":"NA",
"0_20_7":"Non - Toxic",
"0_20_18":"Pharmaceuticals",
"0_20_21":"ChemicalsChemical - Agro Chemicals (Pesticides)",
"0_20_22":"Non - Toxic",
"0_21_0":21,
"0_21_1":"Chemicals",
"0_21_2":"Chemical - Fertiliser",
"0_21_4":0.075641,
"0_21_5":0.0426973202901158,
"0_21_6":"NA",
"0_21_7":"Non - Toxic",
"0_21_18":"Power_and_Utilities",
"0_21_21":"ChemicalsChemical - Fertiliser",
"0_21_22":"Non - Toxic",
"0_22_0":22,
"0_22_1":"Chemicals",
"0_22_2":"Chemicals - Bulk & Polymers",
"0_22_4":0.072888,
"0_22_5":0.0510780264926818,
"0_22_6":"NA",
"0_22_7":"Non - Toxic",
"0_22_18":"Retailers",
"0_22_21":"ChemicalsChemicals - Bulk & Polymers",
"0_22_22":"Non - Toxic",
"0_23_0":23,
"0_23_1":"Chemicals",
"0_23_2":"Chemicals - Speciality",
"0_23_4":0.0794,
"0_23_5":0.0537284940339651,
"0_23_6":"NA",
"0_23_7":"Non - Toxic",
"0_23_18":"Specialty_and_Misc_Services",
"0_23_21":"ChemicalsChemicals - Speciality",
"0_23_22":"Non - Toxic",
"0_24_0":24,
"0_24_1":"Chemicals",
"0_24_2":"Commodity Chemicals",
"0_24_4":0.0834765,
"0_24_5":"NA",
"0_24_6":"NA",
"0_24_7":"Non - Toxic",
"0_24_18":"Steel_Metals_and_Mining",
"0_24_21":"ChemicalsCommodity Chemicals",
"0_24_22":"Non - Toxic",
"0_25_0":25,
"0_25_1":"Chemicals",
"0_25_2":"Diversified Chemicals",
"0_25_4":0.0867075,
"0_25_5":0.0463375598330596,
"0_25_6":"NA",
"0_25_7":"Non - Toxic",
"0_25_18":"Telecom",
"0_25_21":"ChemicalsDiversified Chemicals",
"0_25_22":"Non - Toxic",
"0_26_0":26,
"0_26_1":"Computers_and_Software",
"0_26_2":"Computer & Electronics Retail",
"0_26_4":"NA",
"0_26_5":0.055529,
"0_26_6":"NA",
"0_26_7":"Non - Toxic",
"0_26_18":"Textiles",
"0_26_21":"Computers_and_SoftwareComputer & Electronics Retail",
"0_26_22":"Non - Toxic",
"0_27_0":27,
"0_27_1":"Computers_and_Software",
"0_27_2":"Computer Hardware",
"0_27_4":0.097544,
"0_27_5":0.042012589665858,
"0_27_6":"NA",
"0_27_7":"Non - Toxic",
"0_27_18":"Tobacco",
"0_27_21":"Computers_and_SoftwareComputer Hardware",
"0_27_22":"Non - Toxic",
"0_28_0":28,
"0_28_1":"Computers_and_Software",
"0_28_2":"Computer Storage & Peripherals",
"0_28_4":0.09893,
"0_28_5":0.042012589665858,
"0_28_6":"NA",
"0_28_7":"Toxic",
"0_28_18":"Tourism_and_Hospitality",
"0_28_21":"Computers_and_SoftwareComputer Storage & Peripherals",
"0_28_22":"Toxic",
"0_29_0":29,
"0_29_1":"Computers_and_Software",
"0_29_2":"Data Processing & Outsourced Services",
"0_29_4":"NA",
"0_29_5":"NA",
"0_29_6":0.138965,
"0_29_7":"Non - Toxic",
"0_29_18":"Transportation_and_Related",
"0_29_21":"Computers_and_SoftwareData Processing & Outsourced Services",
"0_29_22":"Non - Toxic",
"0_30_0":30,
"0_30_1":"Computers_and_Software",
"0_30_2":"Internet Software & Services",
"0_30_4":"NA",
"0_30_5":"NA",
"0_30_6":0.128386,
"0_30_7":"Non - Toxic",
"0_30_21":"Computers_and_SoftwareInternet Software & Services",
"0_30_22":"Non - Toxic",
"0_31_0":31,
"0_31_1":"Computers_and_Software",
"0_31_2":"IT Consulting & Other Services",
"0_31_4":"NA",
"0_31_5":0.0563213318171715,
"0_31_6":0.081737,
"0_31_7":"Non - Toxic",
"0_31_21":"Computers_and_SoftwareIT Consulting & Other Services",
"0_31_22":"Non - Toxic",
"0_32_0":32,
"0_32_1":"Computers_and_Software",
"0_32_2":"Technology Distributors",
"0_32_4":"NA",
"0_32_5":0.087776,
"0_32_6":"NA",
"0_32_7":"Non - Toxic",
"0_32_21":"Computers_and_SoftwareTechnology Distributors",
"0_32_22":"Non - Toxic",
"0_33_0":33,
"0_33_1":"Computers_and_Software",
"0_33_2":"Application Development and Maintenance",
"0_33_4":"NA",
"0_33_5":"NA",
"0_33_6":0.112008,
"0_33_7":"Non - Toxic",
"0_33_21":"Computers_and_SoftwareApplication Development and Maintenance",
"0_33_22":"Non - Toxic",
"0_34_0":34,
"0_34_1":"Computers_and_Software",
"0_34_2":"Systems Software",
"0_34_4":"NA",
"0_34_5":"NA",
"0_34_6":0.175852,
"0_34_7":"Non - Toxic",
"0_34_21":"Computers_and_SoftwareSystems Software",
"0_34_22":"Non - Toxic",
"0_35_0":35,
"0_35_1":"Construction_and_Real_Estate",
"0_35_2":"Construction - Commercial and Industrial",
"0_35_4":"NA",
"0_35_5":"NA",
"0_35_6":0.0973585,
"0_35_7":"Negative",
"0_35_21":"Construction_and_Real_EstateConstruction - Commercial and Industrial",
"0_35_22":"Negative",
"0_36_0":36,
"0_36_1":"Construction_and_Real_Estate",
"0_36_2":"Construction - Diversified",
"0_36_4":"NA",
"0_36_5":"NA",
"0_36_6":0.095464,
"0_36_7":"Negative",
"0_36_21":"Construction_and_Real_EstateConstruction - Diversified",
"0_36_22":"Negative",
"0_37_0":37,
"0_37_1":"Construction_and_Real_Estate",
"0_37_2":"Construction - Irrigation projects",
"0_37_4":"NA",
"0_37_5":"NA",
"0_37_6":0.110137,
"0_37_7":"Toxic",
"0_37_21":"Construction_and_Real_EstateConstruction - Irrigation projects",
"0_37_22":"Toxic",
"0_38_0":38,
"0_38_1":"Construction_and_Real_Estate",
"0_38_2":"Construction - Roads & Bridges",
"0_38_4":"NA",
"0_38_5":"NA",
"0_38_6":0.106961,
"0_38_7":"Toxic",
"0_38_21":"Construction_and_Real_EstateConstruction - Roads & Bridges",
"0_38_22":"Toxic",
"0_39_0":39,
"0_39_1":"Construction_and_Real_Estate",
"0_39_2":"Construction - Water & Waste Management",
"0_39_4":"NA",
"0_39_5":"NA",
"0_39_6":0.101245,
"0_39_7":"Toxic",
"0_39_21":"Construction_and_Real_EstateConstruction - Water & Waste Management",
"0_39_22":"Toxic",
"0_40_0":40,
"0_40_1":"Construction_and_Real_Estate",
"0_40_2":"Construction Material",
"0_40_4":0.1149545,
"0_40_5":0.0591924339050974,
"0_40_6":"NA",
"0_40_7":"Toxic",
"0_40_21":"Construction_and_Real_EstateConstruction Material",
"0_40_22":"Toxic",
"0_41_0":41,
"0_41_1":"Construction_and_Real_Estate",
"0_41_2":"Commercial Real Estate Development",
"0_41_4":0.130039,
"0_41_5":"NA",
"0_41_6":"NA",
"0_41_7":"Negative",
"0_41_21":"Construction_and_Real_EstateCommercial Real Estate Development",
"0_41_22":"Negative",
"0_42_0":42,
"0_42_1":"Construction_and_Real_Estate",
"0_42_2":"Diversified Real Estate Development",
"0_42_4":"NA",
"0_42_5":"NA",
"0_42_6":0.281676,
"0_42_7":"Negative",
"0_42_21":"Construction_and_Real_EstateDiversified Real Estate Development",
"0_42_22":"Negative",
"0_43_0":43,
"0_43_1":"Construction_and_Real_Estate",
"0_43_2":"Building Products",
"0_43_4":0.112289,
"0_43_5":0.0591924339050974,
"0_43_6":"NA",
"0_43_7":"Negative",
"0_43_21":"Construction_and_Real_EstateBuilding Products",
"0_43_22":"Negative",
"0_44_0":44,
"0_44_1":"Construction_and_Real_Estate",
"0_44_2":"Cement",
"0_44_4":0.0861815,
"0_44_5":0.0264481270955923,
"0_44_6":"NA",
"0_44_7":"Non - Toxic",
"0_44_21":"Construction_and_Real_EstateCement",
"0_44_22":"Non - Toxic",
"0_45_0":45,
"0_45_1":"Construction_and_Real_Estate",
"0_45_2":"Real Estate Operating Companies",
"0_45_4":"NA",
"0_45_5":"NA",
"0_45_6":0.619633,
"0_45_7":"Non - Toxic",
"0_45_21":"Construction_and_Real_EstateReal Estate Operating Companies",
"0_45_22":"Non - Toxic",
"0_46_0":46,
"0_46_1":"Construction_and_Real_Estate",
"0_46_2":"Real Estate Services",
"0_46_4":"NA",
"0_46_5":"NA",
"0_46_6":0.127369,
"0_46_7":"Negative",
"0_46_21":"Construction_and_Real_EstateReal Estate Services",
"0_46_22":"Negative",
"0_47_0":47,
"0_47_1":"Construction_and_Real_Estate",
"0_47_2":"Residential Real Estate Development",
"0_47_4":0.1663375,
"0_47_5":"NA",
"0_47_6":"NA",
"0_47_7":"Negative",
"0_47_21":"Construction_and_Real_EstateResidential Real Estate Development",
"0_47_22":"Negative",
"0_48_0":48,
"0_48_1":"Consumer_Durables",
"0_48_2":"Consumer Durables - Consumer Electronic products",
"0_48_4":0.075316,
"0_48_5":0.0210450485102871,
"0_48_6":"NA",
"0_48_7":"Non - Toxic",
"0_48_21":"Consumer_DurablesConsumer Durables - Consumer Electronic products",
"0_48_22":"Non - Toxic",
"0_49_0":49,
"0_49_1":"Consumer_Durables",
"0_49_2":"Consumer Durables - Mobile phone traders \/ retailers",
"0_49_4":"NA",
"0_49_5":0.049142,
"0_49_6":"NA",
"0_49_7":"Toxic",
"0_49_21":"Consumer_DurablesConsumer Durables - Mobile phone traders \/ retailers",
"0_49_22":"Toxic",
"0_50_0":50,
"0_50_1":"Consumer_Durables",
"0_50_2":"Consumer Durables - Household Appliances",
"0_50_4":0.0415425,
"0_50_5":0.0380900483644547,
"0_50_6":"NA",
"0_50_7":"Non - Toxic",
"0_50_21":"Consumer_DurablesConsumer Durables - Household Appliances",
"0_50_22":"Non - Toxic",
"0_51_0":51,
"0_51_1":"Consumer_Non_Durables",
"0_51_2":"Footwear",
"0_51_4":0.076666,
"0_51_5":"NA",
"0_51_6":"NA",
"0_51_7":"Non - Toxic",
"0_51_21":"Consumer_Non_DurablesFootwear",
"0_51_22":"Non - Toxic",
"0_52_0":52,
"0_52_1":"Consumer_Non_Durables",
"0_52_2":"Dry Cells",
"0_52_4":"NA",
"0_52_5":0.04,
"0_52_6":"NA",
"0_52_7":"Non - Toxic",
"0_52_21":"Consumer_Non_DurablesDry Cells",
"0_52_22":"Non - Toxic",
"0_53_0":53,
"0_53_1":"Consumer_Non_Durables",
"0_53_2":"Leather & Leather goods",
"0_53_4":0.063258,
"0_53_5":0.0398138999843842,
"0_53_6":"NA",
"0_53_7":"Non - Toxic",
"0_53_21":"Consumer_Non_DurablesLeather & Leather goods",
"0_53_22":"Non - Toxic",
"0_54_0":54,
"0_54_1":"Electonics_and_Engineering",
"0_54_2":"Electrical Components & Equipment",
"0_54_4":0.071546,
"0_54_5":0.0597261825206953,
"0_54_6":"NA",
"0_54_7":"Non - Toxic",
"0_54_21":"Electonics_and_EngineeringElectrical Components & Equipment",
"0_54_22":"Non - Toxic",
"0_55_0":55,
"0_55_1":"Electonics_and_Engineering",
"0_55_2":"Electronic Components- Transformers",
"0_55_4":0.074096,
"0_55_5":"NA",
"0_55_6":"NA",
"0_55_7":"Non - Toxic",
"0_55_21":"Electonics_and_EngineeringElectronic Components- Transformers",
"0_55_22":"Non - Toxic",
"0_56_0":56,
"0_56_1":"Electonics_and_Engineering",
"0_56_2":"Electronic Components-Others",
"0_56_4":0.094166,
"0_56_5":0.0822557229564479,
"0_56_6":"NA",
"0_56_7":"Non - Toxic",
"0_56_21":"Electonics_and_EngineeringElectronic Components-Others",
"0_56_22":"Non - Toxic",
"0_57_0":57,
"0_57_1":"Electonics_and_Engineering",
"0_57_2":"Electronic Equipment & Instruments",
"0_57_4":0.0816955,
"0_57_5":0.0642065745246636,
"0_57_6":"NA",
"0_57_7":"Non - Toxic",
"0_57_21":"Electonics_and_EngineeringElectronic Equipment & Instruments",
"0_57_22":"Non - Toxic",
"0_58_0":58,
"0_58_1":"Electonics_and_Engineering",
"0_58_2":"Electronic Manufacturing Services",
"0_58_4":"NA",
"0_58_5":"NA",
"0_58_6":0.0947395,
"0_58_7":"Non - Toxic",
"0_58_21":"Electonics_and_EngineeringElectronic Manufacturing Services",
"0_58_22":"Non - Toxic",
"0_59_0":59,
"0_59_1":"Electonics_and_Engineering",
"0_59_2":"Engineering & Capital Goods",
"0_59_4":0.090092,
"0_59_5":0.0780671459543109,
"0_59_6":"NA",
"0_59_7":"Non - Toxic",
"0_59_21":"Electonics_and_EngineeringEngineering & Capital Goods",
"0_59_22":"Non - Toxic",
"0_60_0":60,
"0_60_1":"Electonics_and_Engineering",
"0_60_2":"Heavy Electrical Equipment - Others",
"0_60_4":0.088234,
"0_60_5":"NA",
"0_60_6":"NA",
"0_60_7":"Non - Toxic",
"0_60_21":"Electonics_and_EngineeringHeavy Electrical Equipment - Others",
"0_60_22":"Non - Toxic",
"0_61_0":61,
"0_61_1":"Electonics_and_Engineering",
"0_61_2":"Heavy Electrical Equipment - Transformers",
"0_61_4":0.072298,
"0_61_5":"NA",
"0_61_6":"NA",
"0_61_7":"Non - Toxic",
"0_61_21":"Electonics_and_EngineeringHeavy Electrical Equipment - Transformers",
"0_61_22":"Non - Toxic",
"0_62_0":62,
"0_62_1":"Electonics_and_Engineering",
"0_62_2":"Heavy Electrical Equipment and EPC",
"0_62_4":0.090776,
"0_62_5":"NA",
"0_62_6":"NA",
"0_62_7":"Non - Toxic",
"0_62_21":"Electonics_and_EngineeringHeavy Electrical Equipment and EPC",
"0_62_22":"Non - Toxic",
"0_63_0":63,
"0_63_1":"Electonics_and_Engineering",
"0_63_2":"Power Storage equipments",
"0_63_4":0.0804855,
"0_63_5":0.0314492310022428,
"0_63_6":"NA",
"0_63_7":"Non - Toxic",
"0_63_21":"Electonics_and_EngineeringPower Storage equipments",
"0_63_22":"Non - Toxic",
"0_64_0":64,
"0_64_1":"Electonics_and_Engineering",
"0_64_2":"Industrial Machinery and consumables",
"0_64_4":0.098791,
"0_64_5":0.0329204373088385,
"0_64_6":"NA",
"0_64_7":"Non - Toxic",
"0_64_21":"Electonics_and_EngineeringIndustrial Machinery and consumables",
"0_64_22":"Non - Toxic",
"0_65_0":65,
"0_65_1":"Electonics_and_Engineering",
"0_65_2":"Turnkey Services",
"0_65_4":"NA",
"0_65_5":"NA",
"0_65_6":0.098791,
"0_65_7":"Non - Toxic",
"0_65_21":"Electonics_and_EngineeringTurnkey Services",
"0_65_22":"Non - Toxic",
"0_66_0":66,
"0_66_1":"FMCG",
"0_66_2":"FMCG",
"0_66_4":0.0578395,
"0_66_5":0.031525790950346,
"0_66_6":"NA",
"0_66_7":"Non - Toxic",
"0_66_21":"FMCGFMCG",
"0_66_22":"Non - Toxic",
"0_67_0":67,
"0_67_1":"FMCG",
"0_67_2":"FMCG - Others",
"0_67_4":0.100299,
"0_67_5":0.0403622180055505,
"0_67_6":"NA",
"0_67_7":"Non - Toxic",
"0_67_21":"FMCGFMCG - Others",
"0_67_22":"Non - Toxic",
"0_68_0":68,
"0_68_1":"Food_and_Beverage",
"0_68_2":"Basmati Rice",
"0_68_4":0.0541675,
"0_68_5":"NA",
"0_68_6":"NA",
"0_68_7":"Non - Toxic",
"0_68_18":"Pharmaceuticals",
"0_68_21":"Food_and_BeverageBasmati Rice",
"0_68_22":"Non - Toxic",
"0_69_0":69,
"0_69_1":"Food_and_Beverage",
"0_69_2":"Beverages - Alcholic - Brewers",
"0_69_4":0.050883,
"0_69_5":"NA",
"0_69_6":"NA",
"0_69_7":"Non - Toxic",
"0_69_18":"Power_and_Utilities",
"0_69_21":"Food_and_BeverageBeverages - Alcholic - Brewers",
"0_69_22":"Non - Toxic",
"0_70_0":70,
"0_70_1":"Food_and_Beverage",
"0_70_2":"Beverages - Non Alcoholic",
"0_70_4":0.040474,
"0_70_5":"NA",
"0_70_6":"NA",
"0_70_7":"Non - Toxic",
"0_70_18":"Retailers",
"0_70_21":"Food_and_BeverageBeverages - Non Alcoholic",
"0_70_22":"Non - Toxic",
"0_71_0":71,
"0_71_1":"Food_and_Beverage",
"0_71_2":"Dairy Products",
"0_71_4":0.076595,
"0_71_5":"NA",
"0_71_6":"NA",
"0_71_7":"Non - Toxic",
"0_71_18":"Specialty_and_Misc_Services",
"0_71_21":"Food_and_BeverageDairy Products",
"0_71_22":"Non - Toxic",
"0_72_0":72,
"0_72_1":"Food_and_Beverage",
"0_72_2":"Distillers & Vintners",
"0_72_4":0.1061905,
"0_72_5":"NA",
"0_72_6":"NA",
"0_72_7":"Non - Toxic",
"0_72_18":"Steel_Metals_and_Mining",
"0_72_21":"Food_and_BeverageDistillers & Vintners",
"0_72_22":"Non - Toxic",
"0_73_0":73,
"0_73_1":"Food_and_Beverage",
"0_73_2":"Edible Oil",
"0_73_4":0.042375,
"0_73_5":"NA",
"0_73_6":"NA",
"0_73_7":"Non - Toxic",
"0_73_18":"Telecom",
"0_73_21":"Food_and_BeverageEdible Oil",
"0_73_22":"Non - Toxic",
"0_74_0":74,
"0_74_1":"Food_and_Beverage",
"0_74_2":"Food Distributors",
"0_74_4":"NA",
"0_74_5":0.067145,
"0_74_6":"NA",
"0_74_7":"Non - Toxic",
"0_74_18":"Textiles",
"0_74_21":"Food_and_BeverageFood Distributors",
"0_74_22":"Non - Toxic",
"0_75_0":75,
"0_75_1":"Food_and_Beverage",
"0_75_2":"Food Retail",
"0_75_4":"NA",
"0_75_5":0.043996,
"0_75_6":"NA",
"0_75_7":"Non - Toxic",
"0_75_18":"Tobacco",
"0_75_21":"Food_and_BeverageFood Retail",
"0_75_22":"Non - Toxic",
"0_76_0":76,
"0_76_1":"Food_and_Beverage",
"0_76_2":"Packaged Foods & Meats",
"0_76_4":0.063565,
"0_76_5":0.063565,
"0_76_6":"NA",
"0_76_7":"Non - Toxic",
"0_76_18":"Tourism_and_Hospitality",
"0_76_21":"Food_and_BeveragePackaged Foods & Meats",
"0_76_22":"Non - Toxic",
"0_77_0":77,
"0_77_1":"Food_and_Beverage",
"0_77_2":"Sugar",
"0_77_4":0.097669,
"0_77_5":"NA",
"0_77_6":"NA",
"0_77_7":"Non - Toxic",
"0_77_18":"Transportation_and_Related",
"0_77_21":"Food_and_BeverageSugar",
"0_77_22":"Non - Toxic",
"0_78_0":78,
"0_78_1":"Food_and_Beverage",
"0_78_2":"Other packaged foods",
"0_78_3":"bakery & confectionery",
"0_78_4":0.042942,
"0_78_5":0.042942,
"0_78_6":"NA",
"0_78_7":"Non - Toxic",
"0_78_21":"Food_and_BeverageOther packaged foods",
"0_78_22":"Non - Toxic",
"0_79_0":79,
"0_79_1":"Food_and_Beverage",
"0_79_2":"Tea & Coffee",
"0_79_4":0.069224,
"0_79_5":0.043996,
"0_79_6":"NA",
"0_79_7":"Non - Toxic",
"0_79_21":"Food_and_BeverageTea & Coffee",
"0_79_22":"Non - Toxic",
"0_80_0":80,
"0_80_1":"Food_and_Beverage",
"0_80_2":"Soft Drinks",
"0_80_4":0.099413,
"0_80_5":0.043996,
"0_80_6":"NA",
"0_80_7":"Non - Toxic",
"0_80_21":"Food_and_BeverageSoft Drinks",
"0_80_22":"Non - Toxic",
"0_81_0":81,
"0_81_1":"Food_and_Beverage",
"0_81_2":"Wheat Flour & related products",
"0_81_4":0.054132,
"0_81_5":0.067145,
"0_81_6":"NA",
"0_81_7":"Non - Toxic",
"0_81_21":"Food_and_BeverageWheat Flour & related products",
"0_81_22":"Non - Toxic",
"0_82_0":82,
"0_82_1":"Gems_and_Jewellery",
"0_82_2":"Gems & Jewellery - Diamond Jewellery & Retailing",
"0_82_4":"NA",
"0_82_5":0.0679905,
"0_82_6":"NA",
"0_82_7":"Negative",
"0_82_21":"Gems_and_JewelleryGems & Jewellery - Diamond Jewellery & Retailing",
"0_82_22":"Negative",
"0_83_0":83,
"0_83_1":"Gems_and_Jewellery",
"0_83_2":"Gems & Jewellery - Diamond Polishing",
"0_83_4":"NA",
"0_83_5":"NA",
"0_83_6":0.053683,
"0_83_7":"Negative",
"0_83_21":"Gems_and_JewelleryGems & Jewellery - Diamond Polishing",
"0_83_22":"Negative",
"0_84_0":84,
"0_84_1":"Gems_and_Jewellery",
"0_84_2":"Gems & Jewellery - Gold Jewellery & Retailing",
"0_84_4":"NA",
"0_84_5":0.0558985,
"0_84_6":"NA",
"0_84_7":"Negative",
"0_84_21":"Gems_and_JewelleryGems & Jewellery - Gold Jewellery & Retailing",
"0_84_22":"Negative",
"0_85_0":85,
"0_85_1":"Gems_and_Jewellery",
"0_85_2":"Gems & Jewellery - Others",
"0_85_4":"NA",
"0_85_5":0.0741267105953265,
"0_85_6":0.063037,
"0_85_7":"Negative",
"0_85_21":"Gems_and_JewelleryGems & Jewellery - Others",
"0_85_22":"Negative",
"0_86_0":86,
"0_86_1":"Gems_and_Jewellery",
"0_86_2":"Precious Metals & Minerals",
"0_86_4":0.093004,
"0_86_5":0.0478726865544776,
"0_86_6":"NA",
"0_86_7":"Negative",
"0_86_21":"Gems_and_JewelleryPrecious Metals & Minerals",
"0_86_22":"Negative",
"0_87_0":87,
"0_87_1":"Health_Care",
"0_87_2":"Health Care - Auxilliary services",
"0_87_4":"NA",
"0_87_5":"NA",
"0_87_6":0.1528935,
"0_87_7":"Non - Toxic",
"0_87_21":"Health_CareHealth Care - Auxilliary services",
"0_87_22":"Non - Toxic",
"0_88_0":88,
"0_88_1":"Health_Care",
"0_88_2":"Health Care - Hospital",
"0_88_4":"NA",
"0_88_5":"NA",
"0_88_6":0.200731,
"0_88_7":"Non - Toxic",
"0_88_21":"Health_CareHealth Care - Hospital",
"0_88_22":"Non - Toxic",
"0_89_0":89,
"0_89_1":"Health_Care",
"0_89_2":"Health Care Distributors",
"0_89_4":"NA",
"0_89_5":0.076751,
"0_89_6":"NA",
"0_89_7":"Non - Toxic",
"0_89_21":"Health_CareHealth Care Distributors",
"0_89_22":"Non - Toxic",
"0_90_0":90,
"0_90_1":"Health_Care",
"0_90_2":"Health Care Equipment",
"0_90_4":0.055959,
"0_90_5":0.0600753429186852,
"0_90_6":"NA",
"0_90_7":"Non - Toxic",
"0_90_21":"Health_CareHealth Care Equipment",
"0_90_22":"Non - Toxic",
"0_91_0":91,
"0_91_1":"Health_Care",
"0_91_2":"Health Care Supplies",
"0_91_4":"NA",
"0_91_5":0.0852645,
"0_91_6":"NA",
"0_91_7":"Non - Toxic",
"0_91_21":"Health_CareHealth Care Supplies",
"0_91_22":"Non - Toxic",
"0_92_0":92,
"0_92_1":"Home_Furnishings_and_Fittings",
"0_92_2":"Home Furnishing",
"0_92_4":0.078071,
"0_92_5":0.121563531161393,
"0_92_6":"NA",
"0_92_7":"Non - Toxic",
"0_92_21":"Home_Furnishings_and_FittingsHome Furnishing",
"0_92_22":"Non - Toxic",
"0_93_0":93,
"0_93_1":"Home_Furnishings_and_Fittings",
"0_93_2":"Home Improvement Retail - Hardware",
"0_93_4":"NA",
"0_93_5":0.149509,
"0_93_6":"NA",
"0_93_7":"Non - Toxic",
"0_93_21":"Home_Furnishings_and_FittingsHome Improvement Retail - Hardware",
"0_93_22":"Non - Toxic",
"0_94_0":94,
"0_94_1":"Home_Furnishings_and_Fittings",
"0_94_2":"Homebuilding",
"0_94_4":"NA",
"0_94_5":"NA",
"0_94_6":0.134539,
"0_94_7":"Non - Toxic",
"0_94_21":"Home_Furnishings_and_FittingsHomebuilding",
"0_94_22":"Non - Toxic",
"0_95_0":95,
"0_95_1":"Home_Furnishings_and_Fittings",
"0_95_2":"Homefurnishing Retail",
"0_95_4":"NA",
"0_95_5":0.063968,
"0_95_6":"NA",
"0_95_7":"Non - Toxic",
"0_95_21":"Home_Furnishings_and_FittingsHomefurnishing Retail",
"0_95_22":"Non - Toxic",
"0_96_0":96,
"0_96_1":"Home_Furnishings_and_Fittings",
"0_96_2":"Pipe and Pipe Fittings",
"0_96_4":0.0711015,
"0_96_5":0.0503891932666075,
"0_96_6":"NA",
"0_96_7":"Non - Toxic",
"0_96_21":"Home_Furnishings_and_FittingsPipe and Pipe Fittings",
"0_96_22":"Non - Toxic",
"0_97_0":97,
"0_97_1":"Home_Furnishings_and_Fittings",
"0_97_2":"Plywood & Laminates",
"0_97_4":0.059337,
"0_97_5":0.0497900101114408,
"0_97_6":"NA",
"0_97_7":"Non - Toxic",
"0_97_21":"Home_Furnishings_and_FittingsPlywood & Laminates",
"0_97_22":"Non - Toxic",
"0_98_0":98,
"0_98_1":"Home_Furnishings_and_Fittings",
"0_98_2":"Housewares & Specialties",
"0_98_4":0.0893095,
"0_98_5":0.0479015517891213,
"0_98_6":"NA",
"0_98_7":"Non - Toxic",
"0_98_21":"Home_Furnishings_and_FittingsHousewares & Specialties",
"0_98_22":"Non - Toxic",
"0_99_0":99,
"0_99_1":"Media",
"0_99_2":"Media - Advertising",
"0_99_4":"NA",
"0_99_5":"NA",
"0_99_6":0.080952,
"0_99_7":"Non - Toxic",
"0_99_21":"MediaMedia - Advertising",
"0_99_22":"Non - Toxic",
"0_100_0":100,
"0_100_1":"Media",
"0_100_2":"Media - Broadcasting",
"0_100_4":"NA",
"0_100_5":"NA",
"0_100_6":0.197233,
"0_100_7":"Non - Toxic",
"0_100_21":"MediaMedia - Broadcasting",
"0_100_22":"Non - Toxic",
"0_101_0":101,
"0_101_1":"Media",
"0_101_2":"Media - Movies & Entertainment",
"0_101_4":"NA",
"0_101_5":"NA",
"0_101_6":0.13289,
"0_101_7":"Non - Toxic",
"0_101_21":"MediaMedia - Movies & Entertainment",
"0_101_22":"Non - Toxic",
"0_102_0":102,
"0_102_1":"Oil_Petroleum_and_Natural_Gas",
"0_102_2":"Oil & Gas Equipment & Services",
"0_102_4":0.098463,
"0_102_5":"NA",
"0_102_6":"NA",
"0_102_7":"Non - Toxic",
"0_102_21":"Oil_Petroleum_and_Natural_GasOil & Gas Equipment & Services",
"0_102_22":"Non - Toxic",
"0_103_0":103,
"0_103_1":"Oil_Petroleum_and_Natural_Gas",
"0_103_2":"Oil & Gas Exploration & Production",
"0_103_4":0.06893,
"0_103_5":"NA",
"0_103_6":"NA",
"0_103_7":"Non - Toxic",
"0_103_21":"Oil_Petroleum_and_Natural_GasOil & Gas Exploration & Production",
"0_103_22":"Non - Toxic",
"0_104_0":104,
"0_104_1":"Oil_Petroleum_and_Natural_Gas",
"0_104_2":"Oil & Gas Refining & Marketing",
"0_104_4":"NA",
"0_104_5":0.0562265,
"0_104_6":"NA",
"0_104_7":"Non - Toxic",
"0_104_21":"Oil_Petroleum_and_Natural_GasOil & Gas Refining & Marketing",
"0_104_22":"Non - Toxic",
"0_105_0":105,
"0_105_1":"Oil_Petroleum_and_Natural_Gas",
"0_105_2":"Oil & Gas Storage & Transportation",
"0_105_4":"NA",
"0_105_5":"NA",
"0_105_6":0.032709,
"0_105_7":"Non - Toxic",
"0_105_21":"Oil_Petroleum_and_Natural_GasOil & Gas Storage & Transportation",
"0_105_22":"Non - Toxic",
"0_106_0":106,
"0_106_1":"Oil_Petroleum_and_Natural_Gas",
"0_106_2":"Integrated Oil & Gas",
"0_106_4":0.143243,
"0_106_5":"NA",
"0_106_6":"NA",
"0_106_7":"Non - Toxic",
"0_106_21":"Oil_Petroleum_and_Natural_GasIntegrated Oil & Gas",
"0_106_22":"Non - Toxic",
"0_107_0":107,
"0_107_1":"Oil_Petroleum_and_Natural_Gas",
"0_107_2":"Petrol & Gas Distribution utilities",
"0_107_4":"NA",
"0_107_5":"NA",
"0_107_6":0.027141,
"0_107_7":"Non - Toxic",
"0_107_21":"Oil_Petroleum_and_Natural_GasPetrol & Gas Distribution utilities",
"0_107_22":"Non - Toxic",
"0_108_0":108,
"0_108_1":"Oil_Petroleum_and_Natural_Gas",
"0_108_2":"Coal & Consumable Fuels",
"0_108_4":0.0799195,
"0_108_5":0.0528,
"0_108_6":"NA",
"0_108_7":"Non - Toxic",
"0_108_21":"Oil_Petroleum_and_Natural_GasCoal & Consumable Fuels",
"0_108_22":"Non - Toxic",
"0_109_0":109,
"0_109_1":"Oil_Petroleum_and_Natural_Gas",
"0_109_2":"Industrial Gases",
"0_109_4":0.104571,
"0_109_5":"NA",
"0_109_6":"NA",
"0_109_7":"Non - Toxic",
"0_109_21":"Oil_Petroleum_and_Natural_GasIndustrial Gases",
"0_109_22":"Non - Toxic",
"0_110_0":110,
"0_110_1":"Paper_Packaging_and_Publishing",
"0_110_2":"Packaging - Metal, plastic and Glass",
"0_110_4":0.085423,
"0_110_5":0.085423,
"0_110_6":"NA",
"0_110_7":"Non - Toxic",
"0_110_21":"Paper_Packaging_and_PublishingPackaging - Metal, plastic and Glass",
"0_110_22":"Non - Toxic",
"0_111_0":111,
"0_111_1":"Paper_Packaging_and_Publishing",
"0_111_2":"Packaging - Paper",
"0_111_4":0.0818035,
"0_111_5":0.0818035,
"0_111_6":"NA",
"0_111_7":"Non - Toxic",
"0_111_21":"Paper_Packaging_and_PublishingPackaging - Paper",
"0_111_22":"Non - Toxic",
"0_112_0":112,
"0_112_1":"Paper_Packaging_and_Publishing",
"0_112_2":"Printing",
"0_112_4":"NA",
"0_112_5":"NA",
"0_112_6":0.124068,
"0_112_7":"Non - Toxic",
"0_112_21":"Paper_Packaging_and_PublishingPrinting",
"0_112_22":"Non - Toxic",
"0_113_0":113,
"0_113_1":"Paper_Packaging_and_Publishing",
"0_113_2":"Publishing",
"0_113_4":"NA",
"0_113_5":"NA",
"0_113_6":0.136583,
"0_113_7":"Non - Toxic",
"0_113_21":"Paper_Packaging_and_PublishingPublishing",
"0_113_22":"Non - Toxic",
"0_114_0":114,
"0_114_1":"Paper_Packaging_and_Publishing",
"0_114_2":"Industrial Paper",
"0_114_4":0.066918,
"0_114_5":0.066918,
"0_114_6":"NA",
"0_114_7":"Non - Toxic",
"0_114_21":"Paper_Packaging_and_PublishingIndustrial Paper",
"0_114_22":"Non - Toxic",
"0_115_0":115,
"0_115_1":"Paper_Packaging_and_Publishing",
"0_115_2":"Speciality Paper",
"0_115_4":0.056026,
"0_115_5":0.056026,
"0_115_6":"NA",
"0_115_7":"Non - Toxic",
"0_115_21":"Paper_Packaging_and_PublishingSpeciality Paper",
"0_115_22":"Non - Toxic",
"0_116_0":116,
"0_116_1":"Paper_Packaging_and_Publishing",
"0_116_2":"Writing and Printing Paper (WPP)",
"0_116_4":0.092067,
"0_116_5":0.092067,
"0_116_6":"NA",
"0_116_7":"Non - Toxic",
"0_116_21":"Paper_Packaging_and_PublishingWriting and Printing Paper (WPP)",
"0_116_22":"Non - Toxic",
"0_117_0":117,
"0_117_1":"Paper_Packaging_and_Publishing",
"0_117_2":"Office Equipments and writing instruments",
"0_117_4":0.0853185,
"0_117_5":0.0853185,
"0_117_6":"NA",
"0_117_7":"Non - Toxic",
"0_117_21":"Paper_Packaging_and_PublishingOffice Equipments and writing instruments",
"0_117_22":"Non - Toxic",
"0_118_0":118,
"0_118_1":"Pharmaceuticals",
"0_118_2":"Pharmaceuticals - Bulk Drugs",
"0_118_4":0.090296,
"0_118_5":0.0398357721407167,
"0_118_6":"NA",
"0_118_7":"Non - Toxic",
"0_118_21":"PharmaceuticalsPharmaceuticals - Bulk Drugs",
"0_118_22":"Non - Toxic",
"0_119_0":119,
"0_119_1":"Pharmaceuticals",
"0_119_2":"Pharmaceuticals - Contract Manufacturing",
"0_119_4":0.0621315,
"0_119_5":"NA",
"0_119_6":"NA",
"0_119_7":"Non - Toxic",
"0_119_21":"PharmaceuticalsPharmaceuticals - Contract Manufacturing",
"0_119_22":"Non - Toxic",
"0_120_0":120,
"0_120_1":"Pharmaceuticals",
"0_120_2":"Pharmaceuticals - Formulation",
"0_120_4":0.108893,
"0_120_5":"NA",
"0_120_6":"NA",
"0_120_7":"Non - Toxic",
"0_120_21":"PharmaceuticalsPharmaceuticals - Formulation",
"0_120_22":"Non - Toxic",
"0_121_0":121,
"0_121_1":"Pharmaceuticals",
"0_121_2":"Pharmaceuticals - Others",
"0_121_4":0.074257,
"0_121_5":0.0334926405369566,
"0_121_6":"NA",
"0_121_7":"Non - Toxic",
"0_121_21":"PharmaceuticalsPharmaceuticals - Others",
"0_121_22":"Non - Toxic",
"0_122_0":122,
"0_122_1":"Power_and_Utilities",
"0_122_2":"Power Utilities",
"0_122_4":"NA",
"0_122_5":"NA",
"0_122_6":0.150848,
"0_122_7":"Non - Toxic",
"0_122_21":"Power_and_UtilitiesPower Utilities",
"0_122_22":"Non - Toxic",
"0_123_0":123,
"0_123_1":"Power_and_Utilities",
"0_123_2":"Water Utilities",
"0_123_4":"NA",
"0_123_5":0.0507291330818346,
"0_123_6":0.07886,
"0_123_7":"Non - Toxic",
"0_123_21":"Power_and_UtilitiesWater Utilities",
"0_123_22":"Non - Toxic",
"0_124_0":124,
"0_124_1":"Power_and_Utilities",
"0_124_2":"Water Utilities",
"0_124_4":"NA",
"0_124_5":0.0507291330818346,
"0_124_6":0.07886,
"0_124_7":"Non - Toxic",
"0_124_21":"Power_and_UtilitiesWater Utilities",
"0_124_22":"Non - Toxic",
"0_125_0":125,
"0_125_1":"Power_and_Utilities",
"0_125_2":"Independent Power Producers & Energy Traders",
"0_125_4":"NA",
"0_125_5":"NA",
"0_125_6":0.713635,
"0_125_7":"Non - Toxic",
"0_125_21":"Power_and_UtilitiesIndependent Power Producers & Energy Traders",
"0_125_22":"Non - Toxic",
"0_126_0":126,
"0_126_1":"Power_and_Utilities",
"0_126_2":"Urban Local Bodies",
"0_126_4":"NA",
"0_126_5":"NA",
"0_126_6":0.064935,
"0_126_7":"Non - Toxic",
"0_126_21":"Power_and_UtilitiesUrban Local Bodies",
"0_126_22":"Non - Toxic",
"0_127_0":127,
"0_127_1":"Retailers",
"0_127_2":"Department Stores",
"0_127_4":"NA",
"0_127_5":0.095491,
"0_127_6":"NA",
"0_127_7":"Non - Toxic",
"0_127_21":"RetailersDepartment Stores",
"0_127_22":"Non - Toxic",
"0_128_0":128,
"0_128_1":"Retailers",
"0_128_2":"Apparel Retail",
"0_128_4":"NA",
"0_128_5":0.0534265,
"0_128_6":"NA",
"0_128_7":"Non - Toxic",
"0_128_21":"RetailersApparel Retail",
"0_128_22":"Non - Toxic",
"0_129_0":129,
"0_129_1":"Retailers",
"0_129_2":"Hypermarkets & Super Centers",
"0_129_4":"NA",
"0_129_5":"NA",
"0_129_6":0.064953,
"0_129_7":"Non - Toxic",
"0_129_21":"RetailersHypermarkets & Super Centers",
"0_129_22":"Non - Toxic",
"0_130_0":130,
"0_130_1":"Retailers",
"0_130_2":"Drug Retail",
"0_130_4":"NA",
"0_130_5":"NA",
"0_130_6":0.058406,
"0_130_7":"Non - Toxic",
"0_130_21":"RetailersDrug Retail",
"0_130_22":"Non - Toxic",
"0_131_0":131,
"0_131_1":"Retailers",
"0_131_2":"Specialty Stores",
"0_131_4":"NA",
"0_131_5":"NA",
"0_131_6":0.0859385,
"0_131_7":"Non - Toxic",
"0_131_21":"RetailersSpecialty Stores",
"0_131_22":"Non - Toxic",
"0_132_0":132,
"0_132_1":"Specialty_and_Misc_Services",
"0_132_2":"Security Services",
"0_132_4":"NA",
"0_132_5":0.0555312852288367,
"0_132_6":0.06811,
"0_132_7":"Non - Toxic",
"0_132_21":"Specialty_and_Misc_ServicesSecurity Services",
"0_132_22":"Non - Toxic",
"0_133_0":133,
"0_133_1":"Specialty_and_Misc_Services",
"0_133_2":"Environmental & Facilities Services",
"0_133_4":"NA",
"0_133_5":"NA",
"0_133_6":0.103892,
"0_133_7":"Non - Toxic",
"0_133_21":"Specialty_and_Misc_ServicesEnvironmental & Facilities Services",
"0_133_22":"Non - Toxic",
"0_134_0":134,
"0_134_1":"Specialty_and_Misc_Services",
"0_134_2":"Research & Consulting Services ",
"0_134_4":"NA",
"0_134_5":"NA",
"0_134_6":0.14428,
"0_134_7":"Non - Toxic",
"0_134_21":"Specialty_and_Misc_ServicesResearch & Consulting Services ",
"0_134_22":"Non - Toxic",
"0_135_0":135,
"0_135_1":"Specialty_and_Misc_Services",
"0_135_2":"Specialized Consumer Services",
"0_135_4":"NA",
"0_135_5":"NA",
"0_135_6":0.0933415,
"0_135_7":"Non - Toxic",
"0_135_21":"Specialty_and_Misc_ServicesSpecialized Consumer Services",
"0_135_22":"Non - Toxic",
"0_136_0":136,
"0_136_1":"Specialty_and_Misc_Services",
"0_136_2":"Traders",
"0_136_4":"NA",
"0_136_5":0.049142,
"0_136_6":"NA",
"0_136_7":"Non - Toxic",
"0_136_21":"Specialty_and_Misc_ServicesTraders",
"0_136_22":"Non - Toxic",
"0_137_0":137,
"0_137_1":"Specialty_and_Misc_Services",
"0_137_2":"Human Resource & Employment Services",
"0_137_4":"NA",
"0_137_5":"NA",
"0_137_6":0.062596,
"0_137_7":"Non - Toxic",
"0_137_21":"Specialty_and_Misc_ServicesHuman Resource & Employment Services",
"0_137_22":"Non - Toxic",
"0_138_0":138,
"0_138_1":"Specialty_and_Misc_Services",
"0_138_2":"Life Sciences Tools & Services",
"0_138_4":"NA",
"0_138_5":"NA",
"0_138_6":0.116978,
"0_138_7":"Non - Toxic",
"0_138_21":"Specialty_and_Misc_ServicesLife Sciences Tools & Services",
"0_138_22":"Non - Toxic",
"0_139_0":139,
"0_139_1":"Specialty_and_Misc_Services",
"0_139_2":"Distributors",
"0_139_4":"NA",
"0_139_5":0.050215,
"0_139_6":"NA",
"0_139_7":"Non - Toxic",
"0_139_21":"Specialty_and_Misc_ServicesDistributors",
"0_139_22":"Non - Toxic",
"0_140_0":140,
"0_140_1":"Specialty_and_Misc_Services",
"0_140_2":"Diversified",
"0_140_4":0.08508,
"0_140_5":0.0293274329093373,
"0_140_6":"NA",
"0_140_7":"Non - Toxic",
"0_140_21":"Specialty_and_Misc_ServicesDiversified",
"0_140_22":"Non - Toxic",
"0_141_0":141,
"0_141_1":"Specialty_and_Misc_Services",
"0_141_2":"Diversified Support Services",
"0_141_4":"NA",
"0_141_5":"NA",
"0_141_6":0.145041,
"0_141_7":"Non - Toxic",
"0_141_21":"Specialty_and_Misc_ServicesDiversified Support Services",
"0_141_22":"Non - Toxic",
"0_142_0":142,
"0_142_1":"Specialty_and_Misc_Services",
"0_142_2":"Education Services",
"0_142_4":"NA",
"0_142_5":"NA",
"0_142_6":0.285609,
"0_142_7":"Non - Toxic",
"0_142_21":"Specialty_and_Misc_ServicesEducation Services",
"0_142_22":"Non - Toxic",
"0_143_0":143,
"0_143_1":"Specialty_and_Misc_Services",
"0_143_2":"Biotechnology",
"0_143_4":0.189679,
"0_143_5":"NA",
"0_143_6":"NA",
"0_143_7":"Non - Toxic",
"0_143_21":"Specialty_and_Misc_ServicesBiotechnology",
"0_143_22":"Non - Toxic",
"0_144_0":144,
"0_144_1":"Steel_Metals_and_Mining",
"0_144_2":"Steel - Billet\/ Ingot",
"0_144_4":0.027588,
"0_144_5":0.0346406938526342,
"0_144_6":"NA",
"0_144_7":"Negative",
"0_144_21":"Steel_Metals_and_MiningSteel - Billet\/ Ingot",
"0_144_22":"Negative",
"0_145_0":145,
"0_145_1":"Steel_Metals_and_Mining",
"0_145_2":"Steel - Ferro Alloys",
"0_145_4":0.075423,
"0_145_5":0.0346406938526342,
"0_145_6":"NA",
"0_145_7":"Non - Toxic",
"0_145_21":"Steel_Metals_and_MiningSteel - Ferro Alloys",
"0_145_22":"Non - Toxic",
"0_146_0":146,
"0_146_1":"Steel_Metals_and_Mining",
"0_146_2":"Steel - Integrated TMT\/ Rolled\/ Structural products ",
"0_146_4":0.049059,
"0_146_5":0.0346406938526342,
"0_146_6":"NA",
"0_146_7":"Negative",
"0_146_21":"Steel_Metals_and_MiningSteel - Integrated TMT\/ Rolled\/ Structural products ",
"0_146_22":"Negative",
"0_147_0":147,
"0_147_1":"Steel_Metals_and_Mining",
"0_147_2":"Steel - Non integrated TMT\/ Rolled\/ Structural products",
"0_147_4":0.0455425,
"0_147_5":0.0478726865544776,
"0_147_6":"NA",
"0_147_7":"Negative",
"0_147_21":"Steel_Metals_and_MiningSteel - Non integrated TMT\/ Rolled\/ Structural products",
"0_147_22":"Negative",
"0_148_0":148,
"0_148_1":"Steel_Metals_and_Mining",
"0_148_2":"Steel - Others",
"0_148_3":"Casting & forging",
"0_148_4":0.06912,
"0_148_5":0.0346406938526342,
"0_148_6":"NA",
"0_148_7":"Non - Toxic",
"0_148_21":"Steel_Metals_and_MiningSteel - Others",
"0_148_22":"Non - Toxic",
"0_149_0":149,
"0_149_1":"Steel_Metals_and_Mining",
"0_149_2":"Steel - Primary Steel Producers",
"0_149_4":0.0305195,
"0_149_5":0.0346406938526342,
"0_149_6":"NA",
"0_149_7":"Non - Toxic",
"0_149_21":"Steel_Metals_and_MiningSteel - Primary Steel Producers",
"0_149_22":"Non - Toxic",
"0_150_0":150,
"0_150_1":"Steel_Metals_and_Mining",
"0_150_2":"Steel - Semi integrated TMT\/ Rolled\/ Structural products",
"0_150_4":0.0471915,
"0_150_5":0.0346406938526342,
"0_150_6":"NA",
"0_150_7":"Negative",
"0_150_21":"Steel_Metals_and_MiningSteel - Semi integrated TMT\/ Rolled\/ Structural products",
"0_150_22":"Negative",
"0_151_0":151,
"0_151_1":"Steel_Metals_and_Mining",
"0_151_2":"Steel - Sponge\/ Pig Iron",
"0_151_4":0.0689265,
"0_151_5":0.0346406938526342,
"0_151_6":"NA",
"0_151_7":"Negative",
"0_151_21":"Steel_Metals_and_MiningSteel - Sponge\/ Pig Iron",
"0_151_22":"Negative",
"0_152_0":152,
"0_152_1":"Steel_Metals_and_Mining",
"0_152_2":"Aluminum",
"0_152_4":0.071565,
"0_152_5":0.0346406938526342,
"0_152_6":"NA",
"0_152_7":"Non - Toxic",
"0_152_21":"Steel_Metals_and_MiningAluminum",
"0_152_22":"Non - Toxic",
"0_153_0":153,
"0_153_1":"Steel_Metals_and_Mining",
"0_153_2":"Diversified Metals & Mining",
"0_153_4":0.091167,
"0_153_5":0.0315473136313719,
"0_153_6":"NA",
"0_153_7":"Non - Toxic",
"0_153_21":"Steel_Metals_and_MiningDiversified Metals & Mining",
"0_153_22":"Non - Toxic",
"0_154_0":154,
"0_154_1":"Telecom",
"0_154_2":"Communications Equipment",
"0_154_4":0.161436,
"0_154_5":"NA",
"0_154_6":"NA",
"0_154_7":"Non - Toxic",
"0_154_21":"TelecomCommunications Equipment",
"0_154_22":"Non - Toxic",
"0_155_0":155,
"0_155_1":"Telecom",
"0_155_2":"Integrated Telecommunication Services",
"0_155_4":"NA",
"0_155_5":"NA",
"0_155_6":0.1042055,
"0_155_7":"Non - Toxic",
"0_155_21":"TelecomIntegrated Telecommunication Services",
"0_155_22":"Non - Toxic",
"0_156_0":156,
"0_156_1":"Telecom",
"0_156_2":"Transmission Towers",
"0_156_4":0.097754,
"0_156_5":"NA",
"0_156_6":"NA",
"0_156_7":"Non - Toxic",
"0_156_21":"TelecomTransmission Towers",
"0_156_22":"Non - Toxic",
"0_157_0":157,
"0_157_1":"Textiles",
"0_157_2":"Textile - Cotton - Integrated",
"0_157_4":0.066311,
"0_157_5":0.0530488,
"0_157_6":"NA",
"0_157_7":"Toxic",
"0_157_21":"TextilesTextile - Cotton - Integrated",
"0_157_22":"Toxic",
"0_158_0":158,
"0_158_1":"Textiles",
"0_158_2":"Textile - Cotton - Spinning",
"0_158_4":0.073797,
"0_158_5":0.0590376,
"0_158_6":"NA",
"0_158_7":"Toxic",
"0_158_21":"TextilesTextile - Cotton - Spinning",
"0_158_22":"Toxic",
"0_159_0":159,
"0_159_1":"Textiles",
"0_159_2":"Textile - Jute",
"0_159_4":0.067714,
"0_159_5":0.0541712,
"0_159_6":"NA",
"0_159_7":"Non - Toxic",
"0_159_21":"TextilesTextile - Jute",
"0_159_22":"Non - Toxic",
"0_160_0":160,
"0_160_1":"Textiles",
"0_160_2":"Textile - Manmade - Integrated",
"0_160_4":0.067034,
"0_160_5":0.0536272,
"0_160_6":"NA",
"0_160_7":"Non - Toxic",
"0_160_21":"TextilesTextile - Manmade - Integrated",
"0_160_22":"Non - Toxic",
"0_161_0":161,
"0_161_1":"Textiles",
"0_161_2":"Textile - Manmade - Spinning",
"0_161_4":0.071651,
"0_161_5":0.0573208,
"0_161_6":"NA",
"0_161_7":"Non - Toxic",
"0_161_21":"TextilesTextile - Manmade - Spinning",
"0_161_22":"Non - Toxic",
"0_162_0":162,
"0_162_1":"Textiles",
"0_162_2":"Textile - Others",
"0_162_3":"Silk, Linen, Woolen",
"0_162_4":0.062,
"0_162_5":0.0496,
"0_162_6":"NA",
"0_162_7":"Non - Toxic",
"0_162_21":"TextilesTextile - Others",
"0_162_22":"Non - Toxic",
"0_163_0":163,
"0_163_1":"Textiles",
"0_163_2":"Textile - RMG",
"0_163_4":0.069601,
"0_163_5":0.0426654371681511,
"0_163_6":"NA",
"0_163_7":"Non - Toxic",
"0_163_21":"TextilesTextile - RMG",
"0_163_22":"Non - Toxic",
"0_164_0":164,
"0_164_1":"Textiles",
"0_164_2":"Textile - Weaving, Knitting and Processing",
"0_164_4":0.091092,
"0_164_5":0.0728736,
"0_164_6":"NA",
"0_164_7":"Non - Toxic",
"0_164_21":"TextilesTextile - Weaving, Knitting and Processing",
"0_164_22":"Non - Toxic",
"0_165_0":165,
"0_165_1":"Textiles",
"0_165_2":"Textiles- Ginning",
"0_165_4":0.0413465,
"0_165_5":0.0330772,
"0_165_6":"NA",
"0_165_7":"Non - Toxic",
"0_165_21":"TextilesTextiles- Ginning",
"0_165_22":"Non - Toxic",
"0_166_0":166,
"0_166_1":"Tobacco",
"0_166_2":"Tobacco",
"0_166_4":0.03498,
"0_166_5":"NA",
"0_166_6":"NA",
"0_166_7":"Negative",
"0_166_21":"TobaccoTobacco",
"0_166_22":"Negative",
"0_167_0":167,
"0_167_1":"Tobacco",
"0_167_2":"Tobacco Processors",
"0_167_4":0.064986,
"0_167_5":"NA",
"0_167_6":"NA",
"0_167_7":"Negative",
"0_167_21":"TobaccoTobacco Processors",
"0_167_22":"Negative",
"0_168_0":168,
"0_168_1":"Tourism_and_Hospitality",
"0_168_2":"Hotels & Resorts",
"0_168_4":"NA",
"0_168_5":"NA",
"0_168_6":0.232732,
"0_168_7":"Non - Toxic",
"0_168_21":"Tourism_and_HospitalityHotels & Resorts",
"0_168_22":"Non - Toxic",
"0_169_0":169,
"0_169_1":"Tourism_and_Hospitality",
"0_169_2":"Leisure Facilities",
"0_169_4":"NA",
"0_169_5":"NA",
"0_169_6":0.058799,
"0_169_7":"Non - Toxic",
"0_169_21":"Tourism_and_HospitalityLeisure Facilities",
"0_169_22":"Non - Toxic",
"0_170_0":170,
"0_170_1":"Tourism_and_Hospitality",
"0_170_2":"Leisure Products",
"0_170_4":0.08988,
"0_170_5":0.0738864264122441,
"0_170_6":"NA",
"0_170_7":"Non - Toxic",
"0_170_21":"Tourism_and_HospitalityLeisure Products",
"0_170_22":"Non - Toxic",
"0_171_0":171,
"0_171_1":"Tourism_and_Hospitality",
"0_171_2":"Travel agent & tour operator",
"0_171_4":"NA",
"0_171_5":"NA",
"0_171_6":0.153998,
"0_171_7":"Non - Toxic",
"0_171_21":"Tourism_and_HospitalityTravel agent & tour operator",
"0_171_22":"Non - Toxic",
"0_172_0":172,
"0_172_1":"Tourism_and_Hospitality",
"0_172_2":"Restaurants",
"0_172_4":"NA",
"0_172_5":"NA",
"0_172_6":0.063836,
"0_172_7":"Non - Toxic",
"0_172_21":"Tourism_and_HospitalityRestaurants",
"0_172_22":"Non - Toxic",
"0_173_0":173,
"0_173_1":"Transportation_and_Related",
"0_173_2":"Marine Ports & Services",
"0_173_4":"NA",
"0_173_5":"NA",
"0_173_6":0.1279075,
"0_173_7":"Non - Toxic",
"0_173_21":"Transportation_and_RelatedMarine Ports & Services",
"0_173_22":"Non - Toxic",
"0_174_0":174,
"0_174_1":"Transportation_and_Related",
"0_174_2":"Railroads",
"0_174_4":0.078347,
"0_174_5":"NA",
"0_174_6":"NA",
"0_174_7":"Non - Toxic",
"0_174_21":"Transportation_and_RelatedRailroads",
"0_174_22":"Non - Toxic",
"0_175_0":175,
"0_175_1":"Transportation_and_Related",
"0_175_2":"Transport & Logistics",
"0_175_4":"NA",
"0_175_5":"NA",
"0_175_6":0.111488,
"0_175_7":"Non - Toxic",
"0_175_21":"Transportation_and_RelatedTransport & Logistics",
"0_175_22":"Non - Toxic",
"0_176_0":176,
"0_176_1":"Transportation_and_Related",
"0_176_2":"Highways Tolling",
"0_176_4":"NA",
"0_176_5":"NA",
"0_176_6":0.7319895,
"0_176_7":"Non - Toxic",
"0_176_21":"Transportation_and_RelatedHighways Tolling",
"0_176_22":"Non - Toxic",
"0_177_0":177,
"0_177_1":"Transportation_and_Related",
"0_177_2":"Passenger Transport Services (Road)",
"0_177_4":"NA",
"0_177_5":"NA",
"0_177_6":0.153998,
"0_177_7":"Non - Toxic",
"0_177_21":"Transportation_and_RelatedPassenger Transport Services (Road)",
"0_177_22":"Non - Toxic",
"0_178_0":178,
"0_178_1":"Transportation_and_Related",
"0_178_2":"Shipping",
"0_178_4":"NA",
"0_178_5":"NA",
"0_178_6":0.152581,
"0_178_7":"Non - Toxic",
"0_178_21":"Transportation_and_RelatedShipping",
"0_178_22":"Non - Toxic",
"0_179_0":179,
"0_179_1":"Transportation_and_Related",
"0_179_2":"Air\/Shipping Freight & Logistics",
"0_179_4":"NA",
"0_179_5":"NA",
"0_179_6":0.102379,
"0_179_7":"Non - Toxic",
"0_179_21":"Transportation_and_RelatedAir\/Shipping Freight & Logistics",
"0_179_22":"Non - Toxic",
"0_183_0":"** All Showrooms will be given trader margins",
"0_192_8":"`",
"1_0_20":"BHC_calculator_Jul'17",
"1_1_1":"BHC CALCULATOR",
"1_2_15":"Fill for all products",
"1_2_18":"Fill for surrogate",
"1_2_19":"Fill for Income",
"1_3_33":"Select Industry",
"1_4_1":"MANDATORY INFO",
"1_4_33":"Aerospace_and_Defense",
"1_5_23":"Location category",
"1_5_33":"Agriculture_Primary",
"1_6_1":"Industry",
"1_6_3":"Select Industry",
"1_6_23":"Industry Profile of the applicant",
"1_6_33":"Automotive_and_Other_Vehicles",
"1_7_1":"Segment",
"1_7_23":"Cum Loan Amount (Rs lacs)",
"1_7_25":0,
"1_7_33":"Aviation",
"1_7_45":"Actual Location",
"1_7_46":"CITY CAT",
"1_8_1":"Business Type",
"1_8_3":"Select Business Type",
"1_8_23":"Proposed Magma EMI (Rs lacs)",
"1_8_33":"Chemicals",
"1_8_45":"AGRA",
"1_8_46":"CAT B",
"1_9_1":"Location",
"1_9_33":"Computers_and_Software",
"1_9_45":"AHMEDABAD",
"1_9_46":"CAT A",
"1_10_1":"Geo limit norm",
"1_10_3":"Select Geo limit norm",
"1_10_22":"Select Business Type",
"1_10_23":"Manufacturer",
"1_10_24":"Trader",
"1_10_25":"Service",
"1_10_33":"Construction_and_Real_Estate",
"1_10_45":"AHMEDNAGAR",
"1_10_46":"CAT C",
"1_11_1":"Property in Magma SME loc",
"1_11_3":"Select Property in Magma",
"1_11_33":"Consumer_Durables",
"1_11_45":"AJMER",
"1_11_46":"CAT C",
"1_12_1":"Business Stability(in yrs)",
"1_12_33":"Consumer_Non_Durables",
"1_12_45":"AMBALA",
"1_12_46":"CAT B",
"1_13_1":"No of USL in last 6m",
"1_13_33":"Electonics_and_Engineering",
"1_13_45":"AURANGABAD",
"1_13_46":"CAT C",
"1_14_1":"Annual banking credits (in lacs)",
"1_14_33":"FMCG",
"1_14_45":"BALASORE",
"1_14_46":"CAT C",
"1_15_1":"CC \/ OD agnst property' (in lacs)",
"1_15_33":"Food_and_Beverage",
"1_15_45":"BANGALORE",
"1_15_46":"CAT A",
"1_16_1":"Monthly Obligation (in lacs)",
"1_16_33":"Gems_and_Jewellery",
"1_16_45":"BARAMATI",
"1_16_46":"CAT C",
"1_17_1":"Existing exposure (in lacs)",
"1_17_33":"Health_Care",
"1_17_45":"BHAGALPUR",
"1_17_46":"CAT C",
"1_18_1":"Fresh Loan Amt (Rs lacs)",
"1_18_33":"Home_Furnishings_and_Fittings",
"1_18_45":"BHARUCH\/ANKLESHWAR",
"1_18_46":"CAT C",
"1_19_1":"Tenure (months)",
"1_19_3":"Select Tenure",
"1_19_33":"Media",
"1_19_45":"BHATINDA",
"1_19_46":"CAT C",
"1_20_1":"IRR",
"1_20_33":"Oil_Petroleum_and_Natural_Gas",
"1_20_45":"BHILAI \/ DURG",
"1_20_46":"CAT B",
"1_21_1":"Inc from Biz as per ITR (PY) -in lacs",
"1_21_33":"Paper_Packaging_and_Publishing",
"1_21_45":"BHILWARA",
"1_21_46":"CAT C",
"1_22_1":"Inc from Biz as per ITR (CY)-in lacs",
"1_22_33":"Pharmaceuticals",
"1_22_45":"BHOPAL",
"1_22_46":"CAT A",
"1_23_1":"ABB (latest 3 months) in lacs",
"1_23_33":"Power_and_Utilities",
"1_23_45":"BHUBANESHWAR",
"1_23_46":"CAT B",
"1_24_1":"Latest Audited T\/o (in lacs)",
"1_24_33":"Retailers",
"1_24_45":"BIJAPUR",
"1_24_46":"CAT C",
"1_25_1":"Annualized VAT based t\/o (in lacs)",
"1_25_33":"Specialty_and_Misc_Services",
"1_25_45":"BILASPUR",
"1_25_46":"CAT B",
"1_26_1":"PBDIT margin % (Operating margins)",
"1_26_3":0,
"1_26_33":"Steel_Metals_and_Mining",
"1_26_45":"BOKARO",
"1_26_46":"CAT B",
"1_27_33":"Telecom",
"1_27_45":"CHANDIGARH",
"1_27_46":"CAT B",
"1_28_1":"NO - GO PARAMETERS",
"1_28_33":"Textiles",
"1_28_45":"CHENNAI",
"1_28_46":"CAT A",
"1_29_13":"SURROGATE",
"1_29_16":"INCOME",
"1_29_33":"Tobacco",
"1_29_45":"COCHIN",
"1_29_46":"CAT B",
"1_30_1":" profile",
"1_30_2":"Sl no",
"1_30_3":"Parameter",
"1_30_4":"Required",
"1_30_13":"Actual",
"1_30_14":"Criteria met?",
"1_30_16":"Actual",
"1_30_19":"Criteria met?",
"1_30_33":"Tourism_and_Hospitality",
"1_30_45":"COIMBATORE",
"1_30_46":"CAT B",
"1_31_2":1,
"1_31_3":"Industry Profile of app",
"1_31_4":"No Negative \/ Caution \/ Toxic industry profile allowed",
"1_31_13":"Blank",
"1_31_14":"Blank",
"1_31_16":"Blank",
"1_31_19":"Blank",
"1_31_33":"Transportation_and_Related",
"1_31_45":"DAVANGERE",
"1_31_46":"CAT C",
"1_32_2":2,
"1_32_3":"Geo limit norms - SME ",
"1_32_4":"As per the FAQ sheet",
"1_32_13":"Select Geo limit norm",
"1_32_14":"Select Geo limit norm",
"1_32_16":"Select Geo limit norm",
"1_32_19":"Select Geo limit norm",
"1_32_45":"DEHRADUN",
"1_32_46":"CAT B",
"1_33_2":3,
"1_33_3":"Property ownership",
"1_33_4":"Norms are mentioned in FAQ sheet",
"1_33_13":"Select Property in Magma",
"1_33_14":"Met",
"1_33_16":"Select Property in Magma",
"1_33_19":"Met",
"1_33_23":"Fill IRR in Mandatory info",
"1_33_45":"DURGAPUR",
"1_33_46":"CAT C",
"1_34_2":4,
"1_34_3":"Cumulative exposure",
"1_34_4":"10 lacs for ITR and 15 lacs for other programs",
"1_34_13":"NA",
"1_34_14":"Met",
"1_34_16":" - ",
"1_34_19":" - ",
"1_34_45":"HASSAN",
"1_34_46":"CAT C",
"1_35_2":5,
"1_35_3":"Minimum turnover",
"1_35_4":"Surrogate : Annualized banking credits in last 6 months > 50 lakhs ",
"1_35_13":"Blank",
"1_35_14":"Blank",
"1_35_16":" - ",
"1_35_19":" - ",
"1_35_45":"HAZARIBAGH",
"1_35_46":"CAT C",
"1_36_2":6,
"1_36_3":"Business continuity ",
"1_36_4":"3 years \/ 5 years (for LA > 35 lacs)",
"1_36_13":"Blank",
"1_36_14":"Blank",
"1_36_16":"Blank",
"1_36_19":"Blank",
"1_36_45":"HIMMATNAGAR\/MEHSALA\/PALAPUR",
"1_36_46":"CAT C",
"1_37_2":"NO - GO criterias met?",
"1_37_13":"Not eligible for Surrogate Program",
"1_37_16":"Not eligible for Income Program",
"1_37_23":"Industry Profile of the applicant",
"1_37_24":"Negative",
"1_37_25":"Caution",
"1_37_26":"Toxic",
"1_37_45":"HISSAR",
"1_37_46":"CAT C",
"1_38_23":"Geo limit norms - SME ",
"1_38_45":"HUBLI",
"1_38_46":"CAT B",
"1_39_1":"SURROGATE ELIGIBILITY CALCULATION",
"1_39_23":"Property ownership",
"1_39_45":"HYDERABAD",
"1_39_46":"CAT A",
"1_40_20":"all figures in lacs",
"1_40_23":"Cumulative exposure",
"1_40_24":"ITR Surrogate",
"1_40_25":10,
"1_40_26":"others",
"1_40_27":15,
"1_40_45":"INDORE",
"1_40_46":"CAT B",
"1_41_1":"BANKING PRODUCT",
"1_41_6":"CC SURROGATE",
"1_41_11":"ITR SURROGATE",
"1_41_16":"ABB PRODUCT",
"1_41_23":"Surrogate",
"1_41_24":"trader",
"1_41_25":50,
"1_41_26":"others",
"1_41_27":50,
"1_41_28":"Income",
"1_41_29":100,
"1_41_30":"Trader",
"1_41_31":30000,
"1_41_45":"ITARSI\/HOSANGABAD",
"1_41_46":"CAT C",
"1_42_1":"A",
"1_42_2":"Annualized banking credits",
"1_42_4":"NA",
"1_42_6":"A",
"1_42_7":"Avg CC Limit of last 3 months",
"1_42_9":"NA",
"1_42_11":"A",
"1_42_12":"Average of last 2 years income",
"1_42_14":"NA",
"1_42_16":"A",
"1_42_17":"ABB of latest 3 months",
"1_42_19":"NA",
"1_42_23":"Business continuity ",
"1_42_24":3,
"1_42_30":"Service",
"1_42_31":15000,
"1_42_45":"JAIPUR",
"1_42_46":"CAT B",
"1_43_1":"B",
"1_43_2":"Industry Margins",
"1_43_4":"NA",
"1_43_6":"B",
"1_43_7":"Minimum CC Limit",
"1_43_9":"NA",
"1_43_11":"B",
"1_43_12":"Multiplier applicable as per nature of business",
"1_43_14":"NA",
"1_43_16":"B",
"1_43_17":"Imputed Monthly Income('A' *20%)",
"1_43_19":"NA",
"1_43_45":"JALANDHAR",
"1_43_46":"CAT B",
"1_44_1":"C",
"1_44_2":"Monthly Income ('A' * 'B')",
"1_44_4":"NA",
"1_44_7":"Maximum CC Limit",
"1_44_9":"NA",
"1_44_11":"C",
"1_44_12":"Imputed monthly income ('A' * 'B')",
"1_44_14":"NA",
"1_44_16":"C",
"1_44_17":"Monthly Obligations from other accts",
"1_44_19":0,
"1_44_28":"Urban Co-operative Bank,State Co-operative Bank,Foreign Bank, regional rural banks,PSU Bank,Private Bank,",
"1_44_45":"JALGAON",
"1_44_46":"CAT C",
"1_45_1":"D",
"1_45_2":"Monthly Imputed Inc (70% *DIR)",
"1_45_4":"NA",
"1_45_6":"C",
"1_45_7":"Avg CC limit after min max cap",
"1_45_9":"NA",
"1_45_11":"D",
"1_45_12":"Existing monthly obligation",
"1_45_14":"NA",
"1_45_16":"D",
"1_45_17":"Eligible EMI ('B' - 'C')",
"1_45_19":"NA",
"1_45_45":"JAMSHEDPUR",
"1_45_46":"CAT B",
"1_46_1":"E",
"1_46_2":"Existing monthly obligation",
"1_46_4":"NA",
"1_46_6":"D",
"1_46_7":"Eligible LA: (15 % * 'C')",
"1_46_9":"NA",
"1_46_11":"E",
"1_46_12":"Eligible EMI ('C' - 'D')",
"1_46_14":"NA",
"1_46_16":"G",
"1_46_17":"Min tenure",
"1_46_19":"NA",
"1_46_22":"BANKING PRODUCT",
"1_46_24":"CC",
"1_46_26":"ITR",
"1_46_29":"ABB",
"1_46_45":"JODHPUR",
"1_46_46":"CAT B",
"1_47_1":"F",
"1_47_2":"Eligible EMI ('D' - 'E')",
"1_47_4":"NA",
"1_47_6":"E",
"1_47_7":"Min Ticket size ",
"1_47_9":"NA",
"1_47_11":"F",
"1_47_12":"Min tenure",
"1_47_14":"NA",
"1_47_17":"Max tenure",
"1_47_19":"NA",
"1_47_22":"Location CAT",
"1_47_23":"All",
"1_47_24":"Location CAT",
"1_47_25":"All",
"1_47_26":"Location not allowed",
"1_47_27":"CAT A",
"1_47_29":"Location CAT",
"1_47_30":"All",
"1_47_45":"KANPUR",
"1_47_46":"CAT B",
"1_48_1":"G",
"1_48_2":"Min tenure",
"1_48_4":"NA",
"1_48_7":"Max Ticket size",
"1_48_9":"NA",
"1_48_12":"Max tenure",
"1_48_14":"NA",
"1_48_16":"H",
"1_48_17":"Eligible Loan amount",
"1_48_19":"NA",
"1_48_22":"Annualized banking credits",
"1_48_24":"Average CC Limit of last 3 months",
"1_48_26":"Average biz inc of last 2 years income",
"1_48_29":"ABB of latest 3 months",
"1_48_45":"KARNAL",
"1_48_46":"CAT B",
"1_49_2":"Max tenure",
"1_49_4":"NA",
"1_49_9":"NA",
"1_49_11":"G",
"1_49_12":"Eligible LA in lacs",
"1_49_14":"NA",
"1_49_16":"I",
"1_49_17":"Min Ticket size (in lacs)",
"1_49_19":"NA",
"1_49_22":"Industry Margins",
"1_49_24":"Min CC Limit",
"1_49_25":2000000,
"1_49_26":"Multiplier applicable as per nature of business",
"1_49_27":"Manufacturer",
"1_49_28":2,
"1_49_29":"Imputed Monthly Income('A' *20%)",
"1_49_30":0.2,
"1_49_45":"KHAMMAM",
"1_49_46":"CAT C",
"1_50_1":"H",
"1_50_2":"Eligible LA",
"1_50_4":"NA",
"1_50_6":"G",
"1_50_7":"Min tenure",
"1_50_9":"NA",
"1_50_11":"H",
"1_50_12":"Min Ticket size (in lacs)",
"1_50_14":"NA",
"1_50_17":"Max Ticket size (in lacs)",
"1_50_19":"NA",
"1_50_22":"Imputed monthly income",
"1_50_24":"Max CC Limit",
"1_50_25":20000000,
"1_50_27":"Trader",
"1_50_28":1.5,
"1_50_29":"Monthly Obligations from other accts",
"1_50_45":"KOLHAPUR",
"1_50_46":"CAT C",
"1_51_1":"I",
"1_51_2":"Min Ticket size",
"1_51_4":"NA",
"1_51_7":"Max tenure",
"1_51_9":"NA",
"1_51_12":"Max Ticket size (in lacs)",
"1_51_14":"NA",
"1_51_19":"NA",
"1_51_22":"70% DIR",
"1_51_23":0.7,
"1_51_24":"Sanctioned CC Limit",
"1_51_27":"Service",
"1_51_28":1.5,
"1_51_29":"Eligible EMI ('B' - 'C')",
"1_51_45":"KOLKATA",
"1_51_46":"CAT A",
"1_52_2":"Max Ticket size",
"1_52_4":"NA",
"1_52_6":"H",
"1_52_7":"EMI as per eligible LA",
"1_52_9":"NA",
"1_52_14":"Not Eligible",
"1_52_22":"Existing monthly obligation",
"1_52_24":"Eligible LA : 15% of Avg CC Limit (15% * 'A')",
"1_52_25":0.15,
"1_52_26":"Eligible Loan Amount ('C' - 'D')",
"1_52_29":"Min tenure",
"1_52_30":12,
"1_52_45":"KOTA",
"1_52_46":"CAT C",
"1_53_1":"J",
"1_53_2":"Tentative Loan Amount",
"1_53_4":"NA",
"1_53_6":"F",
"1_53_7":"Tentative Loan Amt (in lacs)",
"1_53_9":"NA",
"1_53_11":"I",
"1_53_12":"Tentative Loan Amt (in lacs)",
"1_53_14":"Not Eligible",
"1_53_16":"J",
"1_53_17":"Tentative Loan Amt (in lacs)",
"1_53_19":"NA",
"1_53_22":"Eligible EMI",
"1_53_24":"Min LA",
"1_53_25":3,
"1_53_26":"Min tenure",
"1_53_27":12,
"1_53_29":"Max tenure",
"1_53_30":36,
"1_53_45":"KURNOOL",
"1_53_46":"CAT C",
"1_54_2":"Loan amount after Cum Loan capping",
"1_54_7":"Loan amount after Cum Loan capping",
"1_54_12":"Loan amount after Cum Loan capping",
"1_54_14":"Not Eligible",
"1_54_17":"Loan amount after Cum Loan capping",
"1_54_22":"Min tenure",
"1_54_23":12,
"1_54_24":"Max LA",
"1_54_25":15,
"1_54_26":"Max tenure",
"1_54_27":30,
"1_54_29":"Eligible Loan amount",
"1_54_45":"LUCKNOW",
"1_54_46":"CAT B",
"1_55_22":"Max tenure",
"1_55_23":36,
"1_55_24":"Tentative Loan Amount \n(Enter LA in Mandatory info)",
"1_55_26":"Eligible LA",
"1_55_29":"Min Ticket size (in lacs)",
"1_55_30":3,
"1_55_45":"LUDHIANA",
"1_55_46":"CAT B",
"1_56_22":"Eligible LA",
"1_56_24":"Min tenure",
"1_56_25":12,
"1_56_26":"Min Ticket size (in lacs)",
"1_56_27":3,
"1_56_29":"Max Ticket size (in lacs)",
"1_56_30":15,
"1_56_45":"MADURAI",
"1_56_46":"CAT C",
"1_57_1":"INCOME ELIGIBILITY CALCULATION",
"1_57_22":"Min LA",
"1_57_23":3,
"1_57_24":"Max tenure",
"1_57_25":36,
"1_57_26":"Max Ticket size (in lacs)",
"1_57_27":10,
"1_57_29":"Tentative Loan Amount",
"1_57_45":"MALEGAON",
"1_57_46":"CAT C",
"1_58_22":"Max LA",
"1_58_23":15,
"1_58_24":"EMI as per eligible LA",
"1_58_26":"Tentative Loan Amount",
"1_58_45":"MANGALORE",
"1_58_46":"CAT C",
"1_59_1":"DSCR",
"1_59_12":"Turnover",
"1_59_22":"Tentative Loan Amount",
"1_59_45":"MORBI",
"1_59_46":"CAT C",
"1_60_12":"A",
"1_60_13":"Running year\u2019s turnover ",
"1_60_19":"NA",
"1_60_22":"Cum exp",
"1_60_23":15,
"1_60_24":"Cum exp",
"1_60_25":15,
"1_60_26":"Cum exp",
"1_60_27":10,
"1_60_29":"Cum exp",
"1_60_30":15,
"1_60_45":"MUMBAI",
"1_60_46":"CAT A",
"1_61_12":"B",
"1_61_13":"Eligible Turnover (running yr t\/o capped to 140% latest audited yt t\/o)",
"1_61_19":"NA",
"1_61_45":"MUZAFFARPUR",
"1_61_46":"CAT C",
"1_62_12":"C",
"1_62_13":"Industry margin as per list",
"1_62_22":3,
"1_62_23":"NCM",
"1_62_24":4,
"1_62_25":"NCM",
"1_62_26":4,
"1_62_45":"MYSORE",
"1_62_46":"CAT B",
"1_63_12":"D",
"1_63_13":"Eligible Margin(capped at 3X of avg 2 yrs EBIDTA margin)",
"1_63_19":0,
"1_63_45":"NAGPUR",
"1_63_46":"CAT B",
"1_64_12":"E",
"1_64_13":"Monthly Imputed Income [('B' * 'D')\/12]",
"1_64_19":"NA",
"1_64_45":"NASHIK",
"1_64_46":"CAT B",
"1_65_12":"F",
"1_65_13":"70% DIR (70% * 'E')",
"1_65_19":"NA",
"1_65_28":"DSCR",
"1_65_35":"Turnover",
"1_65_45":"NELLORE",
"1_65_46":"CAT C",
"1_66_12":"G",
"1_66_13":"Existing monthly obligation",
"1_66_19":"NA",
"1_66_28":"Latest audited turnover",
"1_66_35":"Running year\u2019s turnover ",
"1_66_45":"NEW DELHI",
"1_66_46":"CAT A",
"1_67_12":"H",
"1_67_13":"Disposable Income \/ Eligible EMI ('F' - 'G')",
"1_67_19":"NA",
"1_67_28":"Average EBIDTA margin of last 2 years",
"1_67_35":"Eligible Turnover (running yr t\/o capped to 140% latest audited yt t\/o)",
"1_67_36":1.4,
"1_67_45":"NIZAMABAD",
"1_67_46":"CAT C",
"1_68_1":"A",
"1_68_2":"PBDIT \/ Operating profit (in lacs)",
"1_68_4":0,
"1_68_12":"I",
"1_68_13":"Min Tenure",
"1_68_19":"NA",
"1_68_28":"Applicable multiplier",
"1_68_35":"industry margin as per list",
"1_68_43":"DSCR multiplier",
"1_68_44":"DSCR margin",
"1_68_45":"PATNA",
"1_68_46":"CAT B",
"1_69_1":"B",
"1_69_2":"Total tentative annual obligation (in lacs)",
"1_69_4":"#VALUE!",
"1_69_12":"J",
"1_69_13":"Max Tenure",
"1_69_19":"NA",
"1_69_35":"Eligible Margin(capped at 2X of avg 2 yrs EBIDTA margin)",
"1_69_42":"Manufacturer",
"1_69_43":2,
"1_69_44":0.15,
"1_69_45":"PONDICHERRY",
"1_69_46":"CAT B",
"1_70_1":"C",
"1_70_2":"Tentative DSCR (A \/ B)",
"1_70_4":"#VALUE!",
"1_70_12":"K",
"1_70_13":"Eligible LA",
"1_70_19":"NA",
"1_70_28":"Imputed Income (monthly)",
"1_70_35":"Imputed Income (monthly)",
"1_70_42":"Trader",
"1_70_43":1.5,
"1_70_44":0.1,
"1_70_45":"PUNE",
"1_70_46":"CAT A",
"1_71_1":"D",
"1_71_2":"Tentative Running PBDIT(VAT)",
"1_71_4":0,
"1_71_12":"L",
"1_71_13":"Min Ticket size",
"1_71_19":"NA",
"1_71_28":"70% DIR ",
"1_71_35":"70% DIR ",
"1_71_42":"Service",
"1_71_43":2.5,
"1_71_44":0.3,
"1_71_45":"PURNEA",
"1_71_46":"CAT C",
"1_72_1":"E",
"1_72_2":"Tentative Running PBDIT(Banking)",
"1_72_4":0,
"1_72_12":"M",
"1_72_13":"Max Ticket size",
"1_72_19":"NA",
"1_72_28":"Existing obligation",
"1_72_35":"Existing obligation",
"1_72_45":"RAIGARH",
"1_72_46":"CAT C",
"1_73_1":"F",
"1_73_2":"Tentative RDSCR (VAT Based) (D \/ B)",
"1_73_4":"#VALUE!",
"1_73_12":"N",
"1_73_13":"Tentative Loan Amount",
"1_73_19":"NA",
"1_73_28":"Disposable Income",
"1_73_35":"Disposable Income",
"1_73_45":"RAIPUR",
"1_73_46":"CAT B",
"1_74_1":"G",
"1_74_2":"Tentative RDSCR (Banking Based) (E \/ B)",
"1_74_4":"#VALUE!",
"1_74_12":"O",
"1_74_13":"Loan Amount after Cum Loan",
"1_74_28":"Min Tenure",
"1_74_29":12,
"1_74_35":"Min Tenure",
"1_74_36":12,
"1_74_45":"RAJAHMUNDRY",
"1_74_46":"CAT C",
"1_75_28":"Max Tenure",
"1_75_29":36,
"1_75_35":"Max Tenure",
"1_75_36":36,
"1_75_42":"Turnover product RDSCR caln",
"1_75_45":"RAJKOT",
"1_75_46":"CAT B",
"1_76_19":"Not a num",
"1_76_28":"Eligible LA",
"1_76_35":"Eligible EMI",
"1_76_43":"VAT",
"1_76_44":"Banking",
"1_76_45":"RANCHI",
"1_76_46":"CAT B",
"1_77_28":"Eligible LA",
"1_77_35":"Eligible EMI",
"1_77_45":"RATLAM",
"1_77_46":"CAT C",
"1_78_28":"Min Ticket size",
"1_78_29":5,
"1_78_35":"Min Ticket size",
"1_78_36":5,
"1_78_45":"ROHTAK",
"1_78_46":"CAT B",
"1_79_28":"Max Ticket size",
"1_79_29":75,
"1_79_35":"Max Ticket size",
"1_79_36":35,
"1_79_45":"SALEM",
"1_79_46":"CAT B",
"1_80_28":"Tentative Loan Amount",
"1_80_35":"Tentative Loan Amount",
"1_80_45":"SAMBALPUR",
"1_80_46":"CAT C",
"1_81_28":"Loan Amount after Cum Loan",
"1_81_29":"CAT A+",
"1_81_30":"CAT A",
"1_81_31":"CAT B",
"1_81_32":"CAT C",
"1_81_35":"Loan Amount after Cum Loan",
"1_81_36":"CAT A+",
"1_81_37":"CAT A",
"1_81_38":"CAT B",
"1_81_39":"CAT C",
"1_81_45":"SILIGURI",
"1_81_46":"CAT B",
"1_82_29":"No of Critical deviation",
"1_82_45":"SONIPAT",
"1_82_46":"CAT C",
"1_83_45":"SURAT",
"1_83_46":"CAT B",
"1_84_45":"THIRUSUR",
"1_84_46":"CAT C",
"1_85_45":"TIRUPATI",
"1_85_46":"CAT C",
"1_86_45":"TRICHY",
"1_86_46":"CAT C",
"1_87_45":"TRIVANDRUM",
"1_87_46":"CAT C",
"1_88_45":"UDAIPUR",
"1_88_46":"CAT C",
"1_89_45":"VADODARA",
"1_89_46":"CAT C",
"1_90_45":"VAPI",
"1_90_46":"CAT B",
"1_91_45":"VIDISHA\/SAGAR",
"1_91_46":"CAT C",
"1_92_45":"VIJAYAWADA",
"1_92_46":"CAT B",
"1_93_45":"VISHAKHAPATNAM",
"1_93_46":"CAT B",
"1_94_45":"WARANGAL",
"1_94_46":"CAT C",
"1_95_45":"YAMUNANAGAR",
"1_95_46":"CAT B",
"2_1_0":"PAT",
"2_1_6":"Enter in yellow cells",
"2_2_0":"Remuneration to Proprietor's \/Directors' \/ Partner's",
"2_3_0":"Interest on capital paid to Proprietor's \/Directors' \/ Partner's",
"2_4_0":"Tax",
"2_5_0":"PBT",
"2_5_1":0,
"2_6_0":"Depreciation",
"2_7_0":"Interest",
"2_8_0":"PBDIT",
"2_8_1":0,
"2_10_0":"Turnover",
"2_10_1":0,
"2_11_0":"PBDIT margin",
"2_11_1":0,
"3_1_0":"S No",
"3_1_1":"Parameter",
"3_1_2":"Norms",
"3_2_0":1,
"3_2_1":"Geo Limit Norms",
"3_2_2":"Income products\no - 75 kms for a manned Sme location\no - 50 Kms form unmanned SME location\n\nSurrogate products\no - 40 Kms from SME location",
"3_3_0":2,
"3_3_1":"Property Ownership",
"3_3_2":"o - Required with min 1 year vintage of a constructed property only within city limits of Magma location.\no - Owner of property to compulsory join as co applicant. \no - Acceptable owners are Self, Spouse, Father, Mother, Son, firm or company or its partners or directors only.\no - Residence must not be at negative \/ community dominated area (To be confirmed by FI)",
"3_4_0":3,
"3_4_1":"Business Continuity",
"3_4_2":"o -3 years \/ 5 years (for LA > 35 lacs)\no -(Certificate should have been issued at a address in same city)\no -No deviation allowed except when it is on account of change in constitution",
"3_5_0":4,
"3_5_1":"PBDIT Margins",
"3_5_2":"Income before interest, tax and depeciation \/ Latest year audited turnover",
"3_6_0":5,
"3_6_1":"Obligation for ABB",
"3_6_2":"Considered as nil. Final Eligibility (in FAT) is subject to obligations from other bank accounts with ABB:EMI<1",
"4_2_0":"GoDB Changes",
"4_4_0":"S.No",
"4_4_1":"Sheet Name",
"4_4_2":"Cell No",
"4_4_3":"Field Name",
"4_4_4":"Old Formula",
"4_4_5":"New Formula",
"4_4_6":"Comments",
"4_5_0":1,
"4_5_1":"BHC Calculator",
"4_5_2":"D21",
"4_5_3":"IRR",
"4_5_4":"Format in Percentage(12%)",
"4_5_5":"Format in Number with two digit(0.12)",
"4_5_6":"PMT formula is not supported with % val",
"4_6_0":2,
"4_6_1":"BHC Calculator",
"4_6_2":"D7",
"4_6_3":"Industry",
"4_6_4":"DATA VALIDATION : ='Industry List'!$S$3:$S$30",
"4_6_5":"DATA VALIDATION : =$AH$5:$AH$32",
"4_7_0":3,
"4_7_1":"BHC Calculator",
"4_7_2":"D9",
"4_7_3":"Business Type",
"4_7_4":"DATA VALIDATION :='Industry List'!$E$1:$G$1",
"4_7_5":"DATA VALIDATION : $X$11:$Z$11",
"4_8_0":4,
"4_8_1":"BHC Calculator",
"4_8_2":"E55",
"4_8_3":"Loan amount after Cum Loan capping",
"4_8_4":"IFERROR(IF((D18+E54)<E53,E54,IF((E53-D18)<E52,\"LA < min tickt size\",E53-D18)),\"\")",
"4_8_5":"IFERROR(IF(AND(ISNUMBER(D18), ISNUMBER(E54)), IF((D18+E54)<E53,E54,IF((E53-D18)<E52,\"LA < min tickt size\",E53-D18)),\"\"), \"\")",
"4_9_0":5,
"4_9_1":"BHC Calculator",
"4_9_2":"J55",
"4_9_3":"Loan amount after Cum Loan capping",
"4_9_4":"IFERROR(IF((D18+J54)<J49,J54,IF((J49-D18)<J48,\"LA < min tickt size\",J49-D18)),\"\")",
"4_9_5":"IFERROR(IF(AND(ISNUMBER(D18), ISNUMBER(J54)), IF((D18+J54)<J49,J54,IF((J49-D18)<J48,\"LA < min tickt size\",J49-D18)),\"\"), \"\")",
"4_10_0":6,
"4_10_1":"BHC Calculator",
"4_10_2":"O55",
"4_10_3":"Loan amount after Cum Loan capping",
"4_10_4":"IFERROR(IF(O45=\"NA\",\"Not Eligible\",IF((D18+O54)<O52,O54,IF((O52-D18)<O51,\"LA < min tickt size\",O52-D18))),\"\")",
"4_10_5":"IFERROR(IF(O45=\"NA\",\"Not Eligible\",IF(AND(ISNUMBER(D18), ISNUMBER(O54)), IF((D18+O54)<O52,O54,IF((O52-D18)<O51,\"LA < min tickt size\",O52-D18)), \"\")),\"\")",
"4_11_0":7,
"4_11_1":"BHC Calculator",
"4_11_2":"T75",
"4_11_3":"Loan Amount after Cum Loan",
"4_11_4":"IFERROR(IF((D18+T74)<T73,T74,IF((T73-D18)<T72,\"LA < min tickt size\",T73-D18)),\"\")",
"4_11_5":"IFERROR(IF(AND(ISNUMBER(D18), ISNUMBER(T74)), IF((D18+T74)<T73,T74,IF((T73-D18)<T72,\"LA < min tickt size\", T73-D18)),\"\"),\"\")",
"4_11_6":"T74-> Coming as \"LA < min tickt size\", Hence (D18+T74) return NaN in js, But in excel it is #VALUE. Excel identified #VALUE and return the result as IFERROR result. But in app (D18+T74)<T73 (i.e NaN<T73 returns false). Hence Else statement is executed. To avoid this first check whether both the cells(D18, T74) are numbers or not and then execute the same function",
};
var xl2g=null;
var aptg = [
	{sheet: 0, row: 0, col: 0, rowEnd: 179, colEnd: 24, name: ""}, /*0*/
	{sheet: 0, row: 2, col: 2, rowEnd: 6, colEnd: 2, name: ""}, /*1*/
	{sheet: 0, row: 7, col: 2, rowEnd: 15, colEnd: 2, name: ""}, /*2*/
	{sheet: 0, row: 16, col: 2, rowEnd: 19, colEnd: 2, name: ""}, /*3*/
	{sheet: 0, row: 20, col: 2, rowEnd: 25, colEnd: 2, name: ""}, /*4*/
	{sheet: 0, row: 26, col: 2, rowEnd: 34, colEnd: 2, name: ""}, /*5*/
	{sheet: 0, row: 35, col: 2, rowEnd: 47, colEnd: 2, name: ""}, /*6*/
	{sheet: 0, row: 48, col: 2, rowEnd: 50, colEnd: 2, name: ""}, /*7*/
	{sheet: 0, row: 51, col: 2, rowEnd: 53, colEnd: 2, name: ""}, /*8*/
	{sheet: 0, row: 54, col: 2, rowEnd: 65, colEnd: 2, name: ""}, /*9*/
	{sheet: 0, row: 66, col: 2, rowEnd: 67, colEnd: 2, name: ""}, /*10*/
	{sheet: 0, row: 68, col: 2, rowEnd: 81, colEnd: 2, name: ""}, /*11*/
	{sheet: 0, row: 82, col: 2, rowEnd: 86, colEnd: 2, name: ""}, /*12*/
	{sheet: 0, row: 87, col: 2, rowEnd: 91, colEnd: 2, name: ""}, /*13*/
	{sheet: 0, row: 92, col: 2, rowEnd: 98, colEnd: 2, name: ""}, /*14*/
	{sheet: 0, row: 99, col: 2, rowEnd: 101, colEnd: 2, name: ""}, /*15*/
	{sheet: 0, row: 102, col: 2, rowEnd: 109, colEnd: 2, name: ""}, /*16*/
	{sheet: 0, row: 110, col: 2, rowEnd: 117, colEnd: 2, name: ""}, /*17*/
	{sheet: 0, row: 118, col: 2, rowEnd: 121, colEnd: 2, name: ""}, /*18*/
	{sheet: 0, row: 122, col: 2, rowEnd: 126, colEnd: 2, name: ""}, /*19*/
	{sheet: 0, row: 127, col: 2, rowEnd: 131, colEnd: 2, name: ""}, /*20*/
	{sheet: 0, row: 132, col: 2, rowEnd: 143, colEnd: 2, name: ""}, /*21*/
	{sheet: 0, row: 144, col: 2, rowEnd: 153, colEnd: 2, name: ""}, /*22*/
	{sheet: 0, row: 154, col: 2, rowEnd: 156, colEnd: 2, name: ""}, /*23*/
	{sheet: 0, row: 157, col: 2, rowEnd: 165, colEnd: 2, name: ""}, /*24*/
	{sheet: 0, row: 166, col: 2, rowEnd: 167, colEnd: 2, name: ""}, /*25*/
	{sheet: 0, row: 168, col: 2, rowEnd: 172, colEnd: 2, name: ""}, /*26*/
	{sheet: 0, row: 173, col: 2, rowEnd: 179, colEnd: 2, name: ""}, /*27*/
	{sheet: 1, row: 8, col: 45, rowEnd: 95, colEnd: 45, name: ""}, /*28*/
	{sheet: 1, row: 10, col: 22, rowEnd: 10, colEnd: 25, name: ""}, /*29*/
	{sheet: 1, row: 3, col: 33, rowEnd: 31, colEnd: 33, name: ""}, /*30*/
	{sheet: 1, row: 7, col: 45, rowEnd: 61, colEnd: 46, name: ""}, /*31*/
	{sheet: 0, row: 1, col: 21, rowEnd: 234, colEnd: 22, name: ""}, /*32*/
	{sheet: 1, row: 31, col: 14, rowEnd: 36, colEnd: 14, name: ""}, /*33*/
	{sheet: 1, row: 31, col: 19, rowEnd: 36, colEnd: 19, name: ""}, /*34*/
	{sheet: 0, row: 0, col: 2, rowEnd: 232, colEnd: 2, name: ""}, /*35*/
	{sheet: 0, row: 0, col: 4, rowEnd: 0, colEnd: 6, name: ""}, /*36*/
	{sheet: 0, row: 0, col: 4, rowEnd: 232, colEnd: 6, name: ""}, /*37*/
	{sheet: 1, row: 49, col: 27, rowEnd: 51, colEnd: 28, name: ""}, /*38*/
];
var named = {
	"Aerospace_and_Defense": Aerospace_and_Defense(),
	"Agriculture_Primary": Agriculture_Primary(),
	"Automotive_and_Other_Vehicles": Automotive_and_Other_Vehicles(),
	"Aviation": Aviation(),
	"Chemicals": Chemicals(),
	"Computers_and_Software": Computers_and_Software(),
	"Construction_and_Real_Estate": Construction_and_Real_Estate(),
	"Consumer_Durables": Consumer_Durables(),
	"Consumer_Non_Durables": Consumer_Non_Durables(),
	"Electonics_and_Engineering": Electonics_and_Engineering(),
	"FMCG": FMCG(),
	"Food_and_Beverage": Food_and_Beverage(),
	"Gems_and_Jewellery": Gems_and_Jewellery(),
	"Health_Care": Health_Care(),
	"Home_Furnishings_and_Fittings": Home_Furnishings_and_Fittings(),
	"Media": Media(),
	"Oil_Petroleum_and_Natural_Gas": Oil_Petroleum_and_Natural_Gas(),
	"Paper_Packaging_and_Publishing": Paper_Packaging_and_Publishing(),
	"Pharmaceuticals": Pharmaceuticals(),
	"Power_and_Utilities": Power_and_Utilities(),
	"Retailers": Retailers(),
	"Specialty_and_Misc_Services": Specialty_and_Misc_Services(),
	"Steel_Metals_and_Mining": Steel_Metals_and_Mining(),
	"Telecom": Telecom(),
	"Textiles": Textiles(),
	"Tobacco": Tobacco(),
	"Tourism_and_Hospitality": Tourism_and_Hospitality(),
	"Transportation_and_Related": Transportation_and_Related(),
};
function formula1_1_1(){
	return ['Policy met'	,'Policy not met'	]}
function formula2_1_1(){
	return ['Policy met','Policy not met']}
function formula1_1_2(){
	return aptg[28];
}
function formula2_1_2(){
	return aptg[28];
}
function formula1_1_3(){
	return aptg[29];
}
function formula2_1_3(){
	return aptg[29];
}
function formula1_1_4(){
	return ['Select Geo limit norm'	,'Met'	,'Not Met'	]}
function formula2_1_4(){
	return ['Select Geo limit norm','Met','Not Met']}
function formula1_1_5(){
	return ['Select Property in Magma'	,'Yes'	,'No'	]}
function formula2_1_5(){
	return ['Select Property in Magma','Yes','No']}
function formula1_1_6(){
	return ['Select Tenure'	,'12'	,'18'	,'24'	,'30'	,'36'	]}
function formula2_1_6(){
	return ['Select Tenure','12','18','24','30','36']}
function formula1_1_7(){
var tmp = [];
	tmp[0]=_g.INDIRECT(1, data["1_6_3"]);
	return tmp[0];
}
function formula2_1_7(){
var tmp = [];
	tmp[0]=_g.INDIRECT(1, data["1_6_3"]);
	return tmp[0];
}
function formula1_1_8(){
	return aptg[30];
}
function formula2_1_8(){
	return aptg[30];
}
function doValidations(){
var tmp=null;
	tmp = null;
	if(_g.states['v_1_1']!==_g.evalCount){tmp = formula1_1_1();_g.states['c_1_1'] = tmp;_g.states['v_1_1'] = _g.evalCount;}
	else tmp=_g.states['c_1_1'];
	updateListValidations("1_11_2", tmp);
	tmp = null;
	if(_g.states['v_1_2']!==_g.evalCount){tmp = formula1_1_2();_g.states['c_1_2'] = tmp;_g.states['v_1_2'] = _g.evalCount;}
	else tmp=_g.states['c_1_2'];
	updateListValidations("1_9_3", tmp);
	tmp = null;
	if(_g.states['v_1_2']!==_g.evalCount){tmp = formula1_1_2();_g.states['c_1_2'] = tmp;_g.states['v_1_2'] = _g.evalCount;}
	else tmp=_g.states['c_1_2'];
	updateListValidations("1_9_4", tmp);
	tmp = null;
	if(_g.states['v_1_3']!==_g.evalCount){tmp = formula1_1_3();_g.states['c_1_3'] = tmp;_g.states['v_1_3'] = _g.evalCount;}
	else tmp=_g.states['c_1_3'];
	updateListValidations("1_8_3", tmp);
	tmp = null;
	if(_g.states['v_1_3']!==_g.evalCount){tmp = formula1_1_3();_g.states['c_1_3'] = tmp;_g.states['v_1_3'] = _g.evalCount;}
	else tmp=_g.states['c_1_3'];
	updateListValidations("1_8_4", tmp);
	tmp = null;
	if(_g.states['v_1_4']!==_g.evalCount){tmp = formula1_1_4();_g.states['c_1_4'] = tmp;_g.states['v_1_4'] = _g.evalCount;}
	else tmp=_g.states['c_1_4'];
	updateListValidations("1_10_3", tmp);
	tmp = null;
	if(_g.states['v_1_4']!==_g.evalCount){tmp = formula1_1_4();_g.states['c_1_4'] = tmp;_g.states['v_1_4'] = _g.evalCount;}
	else tmp=_g.states['c_1_4'];
	updateListValidations("1_10_4", tmp);
	tmp = null;
	if(_g.states['v_1_5']!==_g.evalCount){tmp = formula1_1_5();_g.states['c_1_5'] = tmp;_g.states['v_1_5'] = _g.evalCount;}
	else tmp=_g.states['c_1_5'];
	updateListValidations("1_11_3", tmp);
	tmp = null;
	if(_g.states['v_1_5']!==_g.evalCount){tmp = formula1_1_5();_g.states['c_1_5'] = tmp;_g.states['v_1_5'] = _g.evalCount;}
	else tmp=_g.states['c_1_5'];
	updateListValidations("1_11_4", tmp);
	tmp = null;
	if(_g.states['v_1_6']!==_g.evalCount){tmp = formula1_1_6();_g.states['c_1_6'] = tmp;_g.states['v_1_6'] = _g.evalCount;}
	else tmp=_g.states['c_1_6'];
	updateListValidations("1_19_3", tmp);
	tmp = null;
	if(_g.states['v_1_6']!==_g.evalCount){tmp = formula1_1_6();_g.states['c_1_6'] = tmp;_g.states['v_1_6'] = _g.evalCount;}
	else tmp=_g.states['c_1_6'];
	updateListValidations("1_19_4", tmp);
	tmp = null;
	if(_g.states['v_1_7']!==_g.evalCount){tmp = formula1_1_7();_g.states['c_1_7'] = tmp;_g.states['v_1_7'] = _g.evalCount;}
	else tmp=_g.states['c_1_7'];
	updateListValidations("1_7_3", tmp);
	tmp = null;
	if(_g.states['v_1_7']!==_g.evalCount){tmp = formula1_1_7();_g.states['c_1_7'] = tmp;_g.states['v_1_7'] = _g.evalCount;}
	else tmp=_g.states['c_1_7'];
	updateListValidations("1_7_4", tmp);
	tmp = null;
	if(_g.states['v_1_8']!==_g.evalCount){tmp = formula1_1_8();_g.states['c_1_8'] = tmp;_g.states['v_1_8'] = _g.evalCount;}
	else tmp=_g.states['c_1_8'];
	updateListValidations("1_6_3", tmp);
	tmp = null;
	if(_g.states['v_1_8']!==_g.evalCount){tmp = formula1_1_8();_g.states['c_1_8'] = tmp;_g.states['v_1_8'] = _g.evalCount;}
	else tmp=_g.states['c_1_8'];
	updateListValidations("1_6_4", tmp);
}
function _xlnm__FilterDatabase(){
	return aptg[0];
}
function _Order1(){
	return 255;
}
function _Order2(){
	return 255;
}
function Aerospace_and_Defense(){
	return data["0_1_2"];
}
function Agriculture_Primary(){
	return aptg[1];
}
function Automotive_and_Other_Vehicles(){
	return aptg[2];
}
function Aviation(){
	return aptg[3];
}
function Chemicals(){
	return aptg[4];
}
function Computers_and_Software(){
	return aptg[5];
}
function Construction_and_Real_Estate(){
	return aptg[6];
}
function Consumer_Durables(){
	return aptg[7];
}
function Consumer_Non_Durables(){
	return aptg[8];
}
function Electonics_and_Engineering(){
	return aptg[9];
}
function FMCG(){
	return aptg[10];
}
function Food_and_Beverage(){
	return aptg[11];
}
function Gems_and_Jewellery(){
	return aptg[12];
}
function Health_Care(){
	return aptg[13];
}
function Home_Furnishings_and_Fittings(){
	return aptg[14];
}
function Media(){
	return aptg[15];
}
function Oil_Petroleum_and_Natural_Gas(){
	return aptg[16];
}
function Paper_Packaging_and_Publishing(){
	return aptg[17];
}
function Pharmaceuticals(){
	return aptg[18];
}
function Power_and_Utilities(){
	return aptg[19];
}
function Retailers(){
	return aptg[20];
}
function Specialty_and_Misc_Services(){
	return aptg[21];
}
function Steel_Metals_and_Mining(){
	return aptg[22];
}
function Telecom(){
	return aptg[23];
}
function Textiles(){
	return aptg[24];
}
function Tobacco(){
	return aptg[25];
}
function Tourism_and_Hospitality(){
	return aptg[26];
}
function Transportation_and_Related(){
	return aptg[27];
}
_g.calc1_8_3 = function(){
};
_g.calc1_7_4 = function(){
};
_g.calc1_9_3 = function(){
};
_g.calc1_8_4 = function(){
};
_g.calc1_6_3 = function(){
};
_g.calc1_7_3 = function(){
};
_g.calc1_6_4 = function(){
};
_g.calc1_19_4 = function(){
};
_g.calc1_19_3 = function(){
};
_g.calc1_11_4 = function(){
};
_g.calc1_10_4 = function(){
};
_g.calc1_11_3 = function(){
};
_g.calc1_11_2 = function(){
};
_g.calc1_10_3 = function(){
};
_g.calc1_9_4 = function(){
};
_g.calc0_1_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_1_1"],data["0_1_2"]);
	data["0_1_21"]=tmp[0];
}
_g.calc0_1_22 = function(){
	data["0_1_22"]=data["0_1_7"];
}
_g.calc0_2_0 = function(){
	data["0_2_0"]=_g.add(data["0_1_0"],1 );
}
_g.calc0_2_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_2_1"],data["0_2_2"]);
	data["0_2_21"]=tmp[0];
}
_g.calc0_2_22 = function(){
	data["0_2_22"]=data["0_2_7"];
}
_g.calc0_3_0 = function(){
	data["0_3_0"]=_g.add(data["0_2_0"],1 );
}
_g.calc0_3_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_3_1"],data["0_3_2"]);
	data["0_3_21"]=tmp[0];
}
_g.calc0_3_22 = function(){
	data["0_3_22"]=data["0_3_7"];
}
_g.calc0_4_0 = function(){
	data["0_4_0"]=_g.add(data["0_3_0"],1 );
}
_g.calc0_4_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_4_1"],data["0_4_2"]);
	data["0_4_21"]=tmp[0];
}
_g.calc0_4_22 = function(){
	data["0_4_22"]=data["0_4_7"];
}
_g.calc0_5_0 = function(){
	data["0_5_0"]=_g.add(data["0_4_0"],1 );
}
_g.calc0_5_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_5_1"],data["0_5_2"]);
	data["0_5_21"]=tmp[0];
}
_g.calc0_5_22 = function(){
	data["0_5_22"]=data["0_5_7"];
}
_g.calc0_6_0 = function(){
	data["0_6_0"]=_g.add(data["0_5_0"],1 );
}
_g.calc0_6_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_6_1"],data["0_6_2"]);
	data["0_6_21"]=tmp[0];
}
_g.calc0_6_22 = function(){
	data["0_6_22"]=data["0_6_7"];
}
_g.calc0_7_0 = function(){
	data["0_7_0"]=_g.add(data["0_6_0"],1 );
}
_g.calc0_7_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_7_1"],data["0_7_2"]);
	data["0_7_21"]=tmp[0];
}
_g.calc0_7_22 = function(){
	data["0_7_22"]=data["0_7_7"];
}
_g.calc0_8_0 = function(){
	data["0_8_0"]=_g.add(data["0_7_0"],1 );
}
_g.calc0_8_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_8_1"],data["0_8_2"]);
	data["0_8_21"]=tmp[0];
}
_g.calc0_8_22 = function(){
	data["0_8_22"]=data["0_8_7"];
}
_g.calc0_9_0 = function(){
	data["0_9_0"]=_g.add(data["0_8_0"],1 );
}
_g.calc0_9_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_9_1"],data["0_9_2"]);
	data["0_9_21"]=tmp[0];
}
_g.calc0_9_22 = function(){
	data["0_9_22"]=data["0_9_7"];
}
_g.calc0_10_0 = function(){
	data["0_10_0"]=_g.add(data["0_9_0"],1 );
}
_g.calc0_10_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_10_1"],data["0_10_2"]);
	data["0_10_21"]=tmp[0];
}
_g.calc0_10_22 = function(){
	data["0_10_22"]=data["0_10_7"];
}
_g.calc0_11_0 = function(){
	data["0_11_0"]=_g.add(data["0_10_0"],1 );
}
_g.calc0_11_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_11_1"],data["0_11_2"]);
	data["0_11_21"]=tmp[0];
}
_g.calc0_11_22 = function(){
	data["0_11_22"]=data["0_11_7"];
}
_g.calc0_12_0 = function(){
	data["0_12_0"]=_g.add(data["0_11_0"],1 );
}
_g.calc0_12_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_12_1"],data["0_12_2"]);
	data["0_12_21"]=tmp[0];
}
_g.calc0_12_22 = function(){
	data["0_12_22"]=data["0_12_7"];
}
_g.calc0_13_0 = function(){
	data["0_13_0"]=_g.add(data["0_12_0"],1 );
}
_g.calc0_13_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_13_1"],data["0_13_2"]);
	data["0_13_21"]=tmp[0];
}
_g.calc0_13_22 = function(){
	data["0_13_22"]=data["0_13_7"];
}
_g.calc0_14_0 = function(){
	data["0_14_0"]=_g.add(data["0_13_0"],1 );
}
_g.calc0_14_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_14_1"],data["0_14_2"]);
	data["0_14_21"]=tmp[0];
}
_g.calc0_14_22 = function(){
	data["0_14_22"]=data["0_14_7"];
}
_g.calc0_15_0 = function(){
	data["0_15_0"]=_g.add(data["0_14_0"],1 );
}
_g.calc0_15_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_15_1"],data["0_15_2"]);
	data["0_15_21"]=tmp[0];
}
_g.calc0_15_22 = function(){
	data["0_15_22"]=data["0_15_7"];
}
_g.calc0_16_0 = function(){
	data["0_16_0"]=_g.add(data["0_15_0"],1 );
}
_g.calc0_16_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_16_1"],data["0_16_2"]);
	data["0_16_21"]=tmp[0];
}
_g.calc0_16_22 = function(){
	data["0_16_22"]=data["0_16_7"];
}
_g.calc0_17_0 = function(){
	data["0_17_0"]=_g.add(data["0_16_0"],1 );
}
_g.calc0_17_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_17_1"],data["0_17_2"]);
	data["0_17_21"]=tmp[0];
}
_g.calc0_17_22 = function(){
	data["0_17_22"]=data["0_17_7"];
}
_g.calc0_18_0 = function(){
	data["0_18_0"]=_g.add(data["0_17_0"],1 );
}
_g.calc0_18_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_18_1"],data["0_18_2"]);
	data["0_18_21"]=tmp[0];
}
_g.calc0_18_22 = function(){
	data["0_18_22"]=data["0_18_7"];
}
_g.calc0_19_0 = function(){
	data["0_19_0"]=_g.add(data["0_18_0"],1 );
}
_g.calc0_19_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_19_1"],data["0_19_2"]);
	data["0_19_21"]=tmp[0];
}
_g.calc0_19_22 = function(){
	data["0_19_22"]=data["0_19_7"];
}
_g.calc0_20_0 = function(){
	data["0_20_0"]=_g.add(data["0_19_0"],1 );
}
_g.calc0_20_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_20_1"],data["0_20_2"]);
	data["0_20_21"]=tmp[0];
}
_g.calc0_20_22 = function(){
	data["0_20_22"]=data["0_20_7"];
}
_g.calc0_21_0 = function(){
	data["0_21_0"]=_g.add(data["0_20_0"],1 );
}
_g.calc0_21_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_21_1"],data["0_21_2"]);
	data["0_21_21"]=tmp[0];
}
_g.calc0_21_22 = function(){
	data["0_21_22"]=data["0_21_7"];
}
_g.calc0_22_0 = function(){
	data["0_22_0"]=_g.add(data["0_21_0"],1 );
}
_g.calc0_22_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_22_1"],data["0_22_2"]);
	data["0_22_21"]=tmp[0];
}
_g.calc0_22_22 = function(){
	data["0_22_22"]=data["0_22_7"];
}
_g.calc0_23_0 = function(){
	data["0_23_0"]=_g.add(data["0_22_0"],1 );
}
_g.calc0_23_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_23_1"],data["0_23_2"]);
	data["0_23_21"]=tmp[0];
}
_g.calc0_23_22 = function(){
	data["0_23_22"]=data["0_23_7"];
}
_g.calc0_24_0 = function(){
	data["0_24_0"]=_g.add(data["0_23_0"],1 );
}
_g.calc0_24_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_24_1"],data["0_24_2"]);
	data["0_24_21"]=tmp[0];
}
_g.calc0_24_22 = function(){
	data["0_24_22"]=data["0_24_7"];
}
_g.calc0_25_0 = function(){
	data["0_25_0"]=_g.add(data["0_24_0"],1 );
}
_g.calc0_25_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_25_1"],data["0_25_2"]);
	data["0_25_21"]=tmp[0];
}
_g.calc0_25_22 = function(){
	data["0_25_22"]=data["0_25_7"];
}
_g.calc0_26_0 = function(){
	data["0_26_0"]=_g.add(data["0_25_0"],1 );
}
_g.calc0_26_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_26_1"],data["0_26_2"]);
	data["0_26_21"]=tmp[0];
}
_g.calc0_26_22 = function(){
	data["0_26_22"]=data["0_26_7"];
}
_g.calc0_27_0 = function(){
	data["0_27_0"]=_g.add(data["0_26_0"],1 );
}
_g.calc0_27_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_27_1"],data["0_27_2"]);
	data["0_27_21"]=tmp[0];
}
_g.calc0_27_22 = function(){
	data["0_27_22"]=data["0_27_7"];
}
_g.calc0_28_0 = function(){
	data["0_28_0"]=_g.add(data["0_27_0"],1 );
}
_g.calc0_28_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_28_1"],data["0_28_2"]);
	data["0_28_21"]=tmp[0];
}
_g.calc0_28_22 = function(){
	data["0_28_22"]=data["0_28_7"];
}
_g.calc0_29_0 = function(){
	data["0_29_0"]=_g.add(data["0_28_0"],1 );
}
_g.calc0_29_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_29_1"],data["0_29_2"]);
	data["0_29_21"]=tmp[0];
}
_g.calc0_29_22 = function(){
	data["0_29_22"]=data["0_29_7"];
}
_g.calc0_30_0 = function(){
	data["0_30_0"]=_g.add(data["0_29_0"],1 );
}
_g.calc0_30_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_30_1"],data["0_30_2"]);
	data["0_30_21"]=tmp[0];
}
_g.calc0_30_22 = function(){
	data["0_30_22"]=data["0_30_7"];
}
_g.calc0_31_0 = function(){
	data["0_31_0"]=_g.add(data["0_30_0"],1 );
}
_g.calc0_31_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_31_1"],data["0_31_2"]);
	data["0_31_21"]=tmp[0];
}
_g.calc0_31_22 = function(){
	data["0_31_22"]=data["0_31_7"];
}
_g.calc0_32_0 = function(){
	data["0_32_0"]=_g.add(data["0_31_0"],1 );
}
_g.calc0_32_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_32_1"],data["0_32_2"]);
	data["0_32_21"]=tmp[0];
}
_g.calc0_32_22 = function(){
	data["0_32_22"]=data["0_32_7"];
}
_g.calc0_33_0 = function(){
	data["0_33_0"]=_g.add(data["0_32_0"],1 );
}
_g.calc0_33_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_33_1"],data["0_33_2"]);
	data["0_33_21"]=tmp[0];
}
_g.calc0_33_22 = function(){
	data["0_33_22"]=data["0_33_7"];
}
_g.calc0_34_0 = function(){
	data["0_34_0"]=_g.add(data["0_33_0"],1 );
}
_g.calc0_34_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_34_1"],data["0_34_2"]);
	data["0_34_21"]=tmp[0];
}
_g.calc0_34_22 = function(){
	data["0_34_22"]=data["0_34_7"];
}
_g.calc0_35_0 = function(){
	data["0_35_0"]=_g.add(data["0_34_0"],1 );
}
_g.calc0_35_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_35_1"],data["0_35_2"]);
	data["0_35_21"]=tmp[0];
}
_g.calc0_35_22 = function(){
	data["0_35_22"]=data["0_35_7"];
}
_g.calc0_36_0 = function(){
	data["0_36_0"]=_g.add(data["0_35_0"],1 );
}
_g.calc0_36_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_36_1"],data["0_36_2"]);
	data["0_36_21"]=tmp[0];
}
_g.calc0_36_22 = function(){
	data["0_36_22"]=data["0_36_7"];
}
_g.calc0_37_0 = function(){
	data["0_37_0"]=_g.add(data["0_36_0"],1 );
}
_g.calc0_37_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_37_1"],data["0_37_2"]);
	data["0_37_21"]=tmp[0];
}
_g.calc0_37_22 = function(){
	data["0_37_22"]=data["0_37_7"];
}
_g.calc0_38_0 = function(){
	data["0_38_0"]=_g.add(data["0_37_0"],1 );
}
_g.calc0_38_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_38_1"],data["0_38_2"]);
	data["0_38_21"]=tmp[0];
}
_g.calc0_38_22 = function(){
	data["0_38_22"]=data["0_38_7"];
}
_g.calc0_39_0 = function(){
	data["0_39_0"]=_g.add(data["0_38_0"],1 );
}
_g.calc0_39_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_39_1"],data["0_39_2"]);
	data["0_39_21"]=tmp[0];
}
_g.calc0_39_22 = function(){
	data["0_39_22"]=data["0_39_7"];
}
_g.calc0_40_0 = function(){
	data["0_40_0"]=_g.add(data["0_39_0"],1 );
}
_g.calc0_40_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_40_1"],data["0_40_2"]);
	data["0_40_21"]=tmp[0];
}
_g.calc0_40_22 = function(){
	data["0_40_22"]=data["0_40_7"];
}
_g.calc0_41_0 = function(){
	data["0_41_0"]=_g.add(data["0_40_0"],1 );
}
_g.calc0_41_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_41_1"],data["0_41_2"]);
	data["0_41_21"]=tmp[0];
}
_g.calc0_41_22 = function(){
	data["0_41_22"]=data["0_41_7"];
}
_g.calc0_42_0 = function(){
	data["0_42_0"]=_g.add(data["0_41_0"],1 );
}
_g.calc0_42_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_42_1"],data["0_42_2"]);
	data["0_42_21"]=tmp[0];
}
_g.calc0_42_22 = function(){
	data["0_42_22"]=data["0_42_7"];
}
_g.calc0_43_0 = function(){
	data["0_43_0"]=_g.add(data["0_42_0"],1 );
}
_g.calc0_43_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_43_1"],data["0_43_2"]);
	data["0_43_21"]=tmp[0];
}
_g.calc0_43_22 = function(){
	data["0_43_22"]=data["0_43_7"];
}
_g.calc0_44_0 = function(){
	data["0_44_0"]=_g.add(data["0_43_0"],1 );
}
_g.calc0_44_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_44_1"],data["0_44_2"]);
	data["0_44_21"]=tmp[0];
}
_g.calc0_44_22 = function(){
	data["0_44_22"]=data["0_44_7"];
}
_g.calc0_45_0 = function(){
	data["0_45_0"]=_g.add(data["0_44_0"],1 );
}
_g.calc0_45_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_45_1"],data["0_45_2"]);
	data["0_45_21"]=tmp[0];
}
_g.calc0_45_22 = function(){
	data["0_45_22"]=data["0_45_7"];
}
_g.calc0_46_0 = function(){
	data["0_46_0"]=_g.add(data["0_45_0"],1 );
}
_g.calc0_46_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_46_1"],data["0_46_2"]);
	data["0_46_21"]=tmp[0];
}
_g.calc0_46_22 = function(){
	data["0_46_22"]=data["0_46_7"];
}
_g.calc0_47_0 = function(){
	data["0_47_0"]=_g.add(data["0_46_0"],1 );
}
_g.calc0_47_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_47_1"],data["0_47_2"]);
	data["0_47_21"]=tmp[0];
}
_g.calc0_47_22 = function(){
	data["0_47_22"]=data["0_47_7"];
}
_g.calc0_48_0 = function(){
	data["0_48_0"]=_g.add(data["0_47_0"],1 );
}
_g.calc0_48_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_48_1"],data["0_48_2"]);
	data["0_48_21"]=tmp[0];
}
_g.calc0_48_22 = function(){
	data["0_48_22"]=data["0_48_7"];
}
_g.calc0_49_0 = function(){
	data["0_49_0"]=_g.add(data["0_48_0"],1 );
}
_g.calc0_49_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_49_1"],data["0_49_2"]);
	data["0_49_21"]=tmp[0];
}
_g.calc0_49_22 = function(){
	data["0_49_22"]=data["0_49_7"];
}
_g.calc0_50_0 = function(){
	data["0_50_0"]=_g.add(data["0_49_0"],1 );
}
_g.calc0_50_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_50_1"],data["0_50_2"]);
	data["0_50_21"]=tmp[0];
}
_g.calc0_50_22 = function(){
	data["0_50_22"]=data["0_50_7"];
}
_g.calc0_51_0 = function(){
	data["0_51_0"]=_g.add(data["0_50_0"],1 );
}
_g.calc0_51_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_51_1"],data["0_51_2"]);
	data["0_51_21"]=tmp[0];
}
_g.calc0_51_22 = function(){
	data["0_51_22"]=data["0_51_7"];
}
_g.calc0_52_0 = function(){
	data["0_52_0"]=_g.add(data["0_51_0"],1 );
}
_g.calc0_52_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_52_1"],data["0_52_2"]);
	data["0_52_21"]=tmp[0];
}
_g.calc0_52_22 = function(){
	data["0_52_22"]=data["0_52_7"];
}
_g.calc0_53_0 = function(){
	data["0_53_0"]=_g.add(data["0_52_0"],1 );
}
_g.calc0_53_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_53_1"],data["0_53_2"]);
	data["0_53_21"]=tmp[0];
}
_g.calc0_53_22 = function(){
	data["0_53_22"]=data["0_53_7"];
}
_g.calc0_54_0 = function(){
	data["0_54_0"]=_g.add(data["0_53_0"],1 );
}
_g.calc0_54_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_54_1"],data["0_54_2"]);
	data["0_54_21"]=tmp[0];
}
_g.calc0_54_22 = function(){
	data["0_54_22"]=data["0_54_7"];
}
_g.calc0_55_0 = function(){
	data["0_55_0"]=_g.add(data["0_54_0"],1 );
}
_g.calc0_55_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_55_1"],data["0_55_2"]);
	data["0_55_21"]=tmp[0];
}
_g.calc0_55_22 = function(){
	data["0_55_22"]=data["0_55_7"];
}
_g.calc0_56_0 = function(){
	data["0_56_0"]=_g.add(data["0_55_0"],1 );
}
_g.calc0_56_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_56_1"],data["0_56_2"]);
	data["0_56_21"]=tmp[0];
}
_g.calc0_56_22 = function(){
	data["0_56_22"]=data["0_56_7"];
}
_g.calc0_57_0 = function(){
	data["0_57_0"]=_g.add(data["0_56_0"],1 );
}
_g.calc0_57_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_57_1"],data["0_57_2"]);
	data["0_57_21"]=tmp[0];
}
_g.calc0_57_22 = function(){
	data["0_57_22"]=data["0_57_7"];
}
_g.calc0_58_0 = function(){
	data["0_58_0"]=_g.add(data["0_57_0"],1 );
}
_g.calc0_58_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_58_1"],data["0_58_2"]);
	data["0_58_21"]=tmp[0];
}
_g.calc0_58_22 = function(){
	data["0_58_22"]=data["0_58_7"];
}
_g.calc0_59_0 = function(){
	data["0_59_0"]=_g.add(data["0_58_0"],1 );
}
_g.calc0_59_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_59_1"],data["0_59_2"]);
	data["0_59_21"]=tmp[0];
}
_g.calc0_59_22 = function(){
	data["0_59_22"]=data["0_59_7"];
}
_g.calc0_60_0 = function(){
	data["0_60_0"]=_g.add(data["0_59_0"],1 );
}
_g.calc0_60_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_60_1"],data["0_60_2"]);
	data["0_60_21"]=tmp[0];
}
_g.calc0_60_22 = function(){
	data["0_60_22"]=data["0_60_7"];
}
_g.calc0_61_0 = function(){
	data["0_61_0"]=_g.add(data["0_60_0"],1 );
}
_g.calc0_61_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_61_1"],data["0_61_2"]);
	data["0_61_21"]=tmp[0];
}
_g.calc0_61_22 = function(){
	data["0_61_22"]=data["0_61_7"];
}
_g.calc0_62_0 = function(){
	data["0_62_0"]=_g.add(data["0_61_0"],1 );
}
_g.calc0_62_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_62_1"],data["0_62_2"]);
	data["0_62_21"]=tmp[0];
}
_g.calc0_62_22 = function(){
	data["0_62_22"]=data["0_62_7"];
}
_g.calc0_63_0 = function(){
	data["0_63_0"]=_g.add(data["0_62_0"],1 );
}
_g.calc0_63_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_63_1"],data["0_63_2"]);
	data["0_63_21"]=tmp[0];
}
_g.calc0_63_22 = function(){
	data["0_63_22"]=data["0_63_7"];
}
_g.calc0_64_0 = function(){
	data["0_64_0"]=_g.add(data["0_63_0"],1 );
}
_g.calc0_64_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_64_1"],data["0_64_2"]);
	data["0_64_21"]=tmp[0];
}
_g.calc0_64_22 = function(){
	data["0_64_22"]=data["0_64_7"];
}
_g.calc0_65_0 = function(){
	data["0_65_0"]=_g.add(data["0_64_0"],1 );
}
_g.calc0_65_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_65_1"],data["0_65_2"]);
	data["0_65_21"]=tmp[0];
}
_g.calc0_65_22 = function(){
	data["0_65_22"]=data["0_65_7"];
}
_g.calc0_66_0 = function(){
	data["0_66_0"]=_g.add(data["0_65_0"],1 );
}
_g.calc0_66_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_66_1"],data["0_66_2"]);
	data["0_66_21"]=tmp[0];
}
_g.calc0_66_22 = function(){
	data["0_66_22"]=data["0_66_7"];
}
_g.calc0_67_0 = function(){
	data["0_67_0"]=_g.add(data["0_66_0"],1 );
}
_g.calc0_67_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_67_1"],data["0_67_2"]);
	data["0_67_21"]=tmp[0];
}
_g.calc0_67_22 = function(){
	data["0_67_22"]=data["0_67_7"];
}
_g.calc0_68_0 = function(){
	data["0_68_0"]=_g.add(data["0_67_0"],1 );
}
_g.calc0_68_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_68_1"],data["0_68_2"]);
	data["0_68_21"]=tmp[0];
}
_g.calc0_68_22 = function(){
	data["0_68_22"]=data["0_68_7"];
}
_g.calc0_69_0 = function(){
	data["0_69_0"]=_g.add(data["0_68_0"],1 );
}
_g.calc0_69_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_69_1"],data["0_69_2"]);
	data["0_69_21"]=tmp[0];
}
_g.calc0_69_22 = function(){
	data["0_69_22"]=data["0_69_7"];
}
_g.calc0_70_0 = function(){
	data["0_70_0"]=_g.add(data["0_69_0"],1 );
}
_g.calc0_70_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_70_1"],data["0_70_2"]);
	data["0_70_21"]=tmp[0];
}
_g.calc0_70_22 = function(){
	data["0_70_22"]=data["0_70_7"];
}
_g.calc0_71_0 = function(){
	data["0_71_0"]=_g.add(data["0_70_0"],1 );
}
_g.calc0_71_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_71_1"],data["0_71_2"]);
	data["0_71_21"]=tmp[0];
}
_g.calc0_71_22 = function(){
	data["0_71_22"]=data["0_71_7"];
}
_g.calc0_72_0 = function(){
	data["0_72_0"]=_g.add(data["0_71_0"],1 );
}
_g.calc0_72_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_72_1"],data["0_72_2"]);
	data["0_72_21"]=tmp[0];
}
_g.calc0_72_22 = function(){
	data["0_72_22"]=data["0_72_7"];
}
_g.calc0_73_0 = function(){
	data["0_73_0"]=_g.add(data["0_72_0"],1 );
}
_g.calc0_73_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_73_1"],data["0_73_2"]);
	data["0_73_21"]=tmp[0];
}
_g.calc0_73_22 = function(){
	data["0_73_22"]=data["0_73_7"];
}
_g.calc0_74_0 = function(){
	data["0_74_0"]=_g.add(data["0_73_0"],1 );
}
_g.calc0_74_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_74_1"],data["0_74_2"]);
	data["0_74_21"]=tmp[0];
}
_g.calc0_74_22 = function(){
	data["0_74_22"]=data["0_74_7"];
}
_g.calc0_75_0 = function(){
	data["0_75_0"]=_g.add(data["0_74_0"],1 );
}
_g.calc0_75_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_75_1"],data["0_75_2"]);
	data["0_75_21"]=tmp[0];
}
_g.calc0_75_22 = function(){
	data["0_75_22"]=data["0_75_7"];
}
_g.calc0_76_0 = function(){
	data["0_76_0"]=_g.add(data["0_75_0"],1 );
}
_g.calc0_76_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_76_1"],data["0_76_2"]);
	data["0_76_21"]=tmp[0];
}
_g.calc0_76_22 = function(){
	data["0_76_22"]=data["0_76_7"];
}
_g.calc0_77_0 = function(){
	data["0_77_0"]=_g.add(data["0_76_0"],1 );
}
_g.calc0_77_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_77_1"],data["0_77_2"]);
	data["0_77_21"]=tmp[0];
}
_g.calc0_77_22 = function(){
	data["0_77_22"]=data["0_77_7"];
}
_g.calc0_78_0 = function(){
	data["0_78_0"]=_g.add(data["0_77_0"],1 );
}
_g.calc0_78_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_78_1"],data["0_78_2"]);
	data["0_78_21"]=tmp[0];
}
_g.calc0_78_22 = function(){
	data["0_78_22"]=data["0_78_7"];
}
_g.calc0_79_0 = function(){
	data["0_79_0"]=_g.add(data["0_78_0"],1 );
}
_g.calc0_79_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_79_1"],data["0_79_2"]);
	data["0_79_21"]=tmp[0];
}
_g.calc0_79_22 = function(){
	data["0_79_22"]=data["0_79_7"];
}
_g.calc0_80_0 = function(){
	data["0_80_0"]=_g.add(data["0_79_0"],1 );
}
_g.calc0_80_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_80_1"],data["0_80_2"]);
	data["0_80_21"]=tmp[0];
}
_g.calc0_80_22 = function(){
	data["0_80_22"]=data["0_80_7"];
}
_g.calc0_81_0 = function(){
	data["0_81_0"]=_g.add(data["0_80_0"],1 );
}
_g.calc0_81_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_81_1"],data["0_81_2"]);
	data["0_81_21"]=tmp[0];
}
_g.calc0_81_22 = function(){
	data["0_81_22"]=data["0_81_7"];
}
_g.calc0_82_0 = function(){
	data["0_82_0"]=_g.add(data["0_81_0"],1 );
}
_g.calc0_82_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_82_1"],data["0_82_2"]);
	data["0_82_21"]=tmp[0];
}
_g.calc0_82_22 = function(){
	data["0_82_22"]=data["0_82_7"];
}
_g.calc0_83_0 = function(){
	data["0_83_0"]=_g.add(data["0_82_0"],1 );
}
_g.calc0_83_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_83_1"],data["0_83_2"]);
	data["0_83_21"]=tmp[0];
}
_g.calc0_83_22 = function(){
	data["0_83_22"]=data["0_83_7"];
}
_g.calc0_84_0 = function(){
	data["0_84_0"]=_g.add(data["0_83_0"],1 );
}
_g.calc0_84_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_84_1"],data["0_84_2"]);
	data["0_84_21"]=tmp[0];
}
_g.calc0_84_22 = function(){
	data["0_84_22"]=data["0_84_7"];
}
_g.calc0_85_0 = function(){
	data["0_85_0"]=_g.add(data["0_84_0"],1 );
}
_g.calc0_85_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_85_1"],data["0_85_2"]);
	data["0_85_21"]=tmp[0];
}
_g.calc0_85_22 = function(){
	data["0_85_22"]=data["0_85_7"];
}
_g.calc0_86_0 = function(){
	data["0_86_0"]=_g.add(data["0_85_0"],1 );
}
_g.calc0_86_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_86_1"],data["0_86_2"]);
	data["0_86_21"]=tmp[0];
}
_g.calc0_86_22 = function(){
	data["0_86_22"]=data["0_86_7"];
}
_g.calc0_87_0 = function(){
	data["0_87_0"]=_g.add(data["0_86_0"],1 );
}
_g.calc0_87_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_87_1"],data["0_87_2"]);
	data["0_87_21"]=tmp[0];
}
_g.calc0_87_22 = function(){
	data["0_87_22"]=data["0_87_7"];
}
_g.calc0_88_0 = function(){
	data["0_88_0"]=_g.add(data["0_87_0"],1 );
}
_g.calc0_88_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_88_1"],data["0_88_2"]);
	data["0_88_21"]=tmp[0];
}
_g.calc0_88_22 = function(){
	data["0_88_22"]=data["0_88_7"];
}
_g.calc0_89_0 = function(){
	data["0_89_0"]=_g.add(data["0_88_0"],1 );
}
_g.calc0_89_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_89_1"],data["0_89_2"]);
	data["0_89_21"]=tmp[0];
}
_g.calc0_89_22 = function(){
	data["0_89_22"]=data["0_89_7"];
}
_g.calc0_90_0 = function(){
	data["0_90_0"]=_g.add(data["0_89_0"],1 );
}
_g.calc0_90_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_90_1"],data["0_90_2"]);
	data["0_90_21"]=tmp[0];
}
_g.calc0_90_22 = function(){
	data["0_90_22"]=data["0_90_7"];
}
_g.calc0_91_0 = function(){
	data["0_91_0"]=_g.add(data["0_90_0"],1 );
}
_g.calc0_91_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_91_1"],data["0_91_2"]);
	data["0_91_21"]=tmp[0];
}
_g.calc0_91_22 = function(){
	data["0_91_22"]=data["0_91_7"];
}
_g.calc0_92_0 = function(){
	data["0_92_0"]=_g.add(data["0_91_0"],1 );
}
_g.calc0_92_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_92_1"],data["0_92_2"]);
	data["0_92_21"]=tmp[0];
}
_g.calc0_92_22 = function(){
	data["0_92_22"]=data["0_92_7"];
}
_g.calc0_93_0 = function(){
	data["0_93_0"]=_g.add(data["0_92_0"],1 );
}
_g.calc0_93_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_93_1"],data["0_93_2"]);
	data["0_93_21"]=tmp[0];
}
_g.calc0_93_22 = function(){
	data["0_93_22"]=data["0_93_7"];
}
_g.calc0_94_0 = function(){
	data["0_94_0"]=_g.add(data["0_93_0"],1 );
}
_g.calc0_94_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_94_1"],data["0_94_2"]);
	data["0_94_21"]=tmp[0];
}
_g.calc0_94_22 = function(){
	data["0_94_22"]=data["0_94_7"];
}
_g.calc0_95_0 = function(){
	data["0_95_0"]=_g.add(data["0_94_0"],1 );
}
_g.calc0_95_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_95_1"],data["0_95_2"]);
	data["0_95_21"]=tmp[0];
}
_g.calc0_95_22 = function(){
	data["0_95_22"]=data["0_95_7"];
}
_g.calc0_96_0 = function(){
	data["0_96_0"]=_g.add(data["0_95_0"],1 );
}
_g.calc0_96_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_96_1"],data["0_96_2"]);
	data["0_96_21"]=tmp[0];
}
_g.calc0_96_22 = function(){
	data["0_96_22"]=data["0_96_7"];
}
_g.calc0_97_0 = function(){
	data["0_97_0"]=_g.add(data["0_96_0"],1 );
}
_g.calc0_97_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_97_1"],data["0_97_2"]);
	data["0_97_21"]=tmp[0];
}
_g.calc0_97_22 = function(){
	data["0_97_22"]=data["0_97_7"];
}
_g.calc0_98_0 = function(){
	data["0_98_0"]=_g.add(data["0_97_0"],1 );
}
_g.calc0_98_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_98_1"],data["0_98_2"]);
	data["0_98_21"]=tmp[0];
}
_g.calc0_98_22 = function(){
	data["0_98_22"]=data["0_98_7"];
}
_g.calc0_99_0 = function(){
	data["0_99_0"]=_g.add(data["0_98_0"],1 );
}
_g.calc0_99_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_99_1"],data["0_99_2"]);
	data["0_99_21"]=tmp[0];
}
_g.calc0_99_22 = function(){
	data["0_99_22"]=data["0_99_7"];
}
_g.calc0_100_0 = function(){
	data["0_100_0"]=_g.add(data["0_99_0"],1 );
}
_g.calc0_100_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_100_1"],data["0_100_2"]);
	data["0_100_21"]=tmp[0];
}
_g.calc0_100_22 = function(){
	data["0_100_22"]=data["0_100_7"];
}
_g.calc0_101_0 = function(){
	data["0_101_0"]=_g.add(data["0_100_0"],1 );
}
_g.calc0_101_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_101_1"],data["0_101_2"]);
	data["0_101_21"]=tmp[0];
}
_g.calc0_101_22 = function(){
	data["0_101_22"]=data["0_101_7"];
}
_g.calc0_102_0 = function(){
	data["0_102_0"]=_g.add(data["0_101_0"],1 );
}
_g.calc0_102_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_102_1"],data["0_102_2"]);
	data["0_102_21"]=tmp[0];
}
_g.calc0_102_22 = function(){
	data["0_102_22"]=data["0_102_7"];
}
_g.calc0_103_0 = function(){
	data["0_103_0"]=_g.add(data["0_102_0"],1 );
}
_g.calc0_103_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_103_1"],data["0_103_2"]);
	data["0_103_21"]=tmp[0];
}
_g.calc0_103_22 = function(){
	data["0_103_22"]=data["0_103_7"];
}
_g.calc0_104_0 = function(){
	data["0_104_0"]=_g.add(data["0_103_0"],1 );
}
_g.calc0_104_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_104_1"],data["0_104_2"]);
	data["0_104_21"]=tmp[0];
}
_g.calc0_104_22 = function(){
	data["0_104_22"]=data["0_104_7"];
}
_g.calc0_105_0 = function(){
	data["0_105_0"]=_g.add(data["0_104_0"],1 );
}
_g.calc0_105_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_105_1"],data["0_105_2"]);
	data["0_105_21"]=tmp[0];
}
_g.calc0_105_22 = function(){
	data["0_105_22"]=data["0_105_7"];
}
_g.calc0_106_0 = function(){
	data["0_106_0"]=_g.add(data["0_105_0"],1 );
}
_g.calc0_106_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_106_1"],data["0_106_2"]);
	data["0_106_21"]=tmp[0];
}
_g.calc0_106_22 = function(){
	data["0_106_22"]=data["0_106_7"];
}
_g.calc0_107_0 = function(){
	data["0_107_0"]=_g.add(data["0_106_0"],1 );
}
_g.calc0_107_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_107_1"],data["0_107_2"]);
	data["0_107_21"]=tmp[0];
}
_g.calc0_107_22 = function(){
	data["0_107_22"]=data["0_107_7"];
}
_g.calc0_108_0 = function(){
	data["0_108_0"]=_g.add(data["0_107_0"],1 );
}
_g.calc0_108_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_108_1"],data["0_108_2"]);
	data["0_108_21"]=tmp[0];
}
_g.calc0_108_22 = function(){
	data["0_108_22"]=data["0_108_7"];
}
_g.calc0_109_0 = function(){
	data["0_109_0"]=_g.add(data["0_108_0"],1 );
}
_g.calc0_109_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_109_1"],data["0_109_2"]);
	data["0_109_21"]=tmp[0];
}
_g.calc0_109_22 = function(){
	data["0_109_22"]=data["0_109_7"];
}
_g.calc0_110_0 = function(){
	data["0_110_0"]=_g.add(data["0_109_0"],1 );
}
_g.calc0_110_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_110_1"],data["0_110_2"]);
	data["0_110_21"]=tmp[0];
}
_g.calc0_110_22 = function(){
	data["0_110_22"]=data["0_110_7"];
}
_g.calc0_111_0 = function(){
	data["0_111_0"]=_g.add(data["0_110_0"],1 );
}
_g.calc0_111_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_111_1"],data["0_111_2"]);
	data["0_111_21"]=tmp[0];
}
_g.calc0_111_22 = function(){
	data["0_111_22"]=data["0_111_7"];
}
_g.calc0_112_0 = function(){
	data["0_112_0"]=_g.add(data["0_111_0"],1 );
}
_g.calc0_112_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_112_1"],data["0_112_2"]);
	data["0_112_21"]=tmp[0];
}
_g.calc0_112_22 = function(){
	data["0_112_22"]=data["0_112_7"];
}
_g.calc0_113_0 = function(){
	data["0_113_0"]=_g.add(data["0_112_0"],1 );
}
_g.calc0_113_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_113_1"],data["0_113_2"]);
	data["0_113_21"]=tmp[0];
}
_g.calc0_113_22 = function(){
	data["0_113_22"]=data["0_113_7"];
}
_g.calc0_114_0 = function(){
	data["0_114_0"]=_g.add(data["0_113_0"],1 );
}
_g.calc0_114_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_114_1"],data["0_114_2"]);
	data["0_114_21"]=tmp[0];
}
_g.calc0_114_22 = function(){
	data["0_114_22"]=data["0_114_7"];
}
_g.calc0_115_0 = function(){
	data["0_115_0"]=_g.add(data["0_114_0"],1 );
}
_g.calc0_115_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_115_1"],data["0_115_2"]);
	data["0_115_21"]=tmp[0];
}
_g.calc0_115_22 = function(){
	data["0_115_22"]=data["0_115_7"];
}
_g.calc0_116_0 = function(){
	data["0_116_0"]=_g.add(data["0_115_0"],1 );
}
_g.calc0_116_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_116_1"],data["0_116_2"]);
	data["0_116_21"]=tmp[0];
}
_g.calc0_116_22 = function(){
	data["0_116_22"]=data["0_116_7"];
}
_g.calc0_117_0 = function(){
	data["0_117_0"]=_g.add(data["0_116_0"],1 );
}
_g.calc0_117_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_117_1"],data["0_117_2"]);
	data["0_117_21"]=tmp[0];
}
_g.calc0_117_22 = function(){
	data["0_117_22"]=data["0_117_7"];
}
_g.calc0_118_0 = function(){
	data["0_118_0"]=_g.add(data["0_117_0"],1 );
}
_g.calc0_118_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_118_1"],data["0_118_2"]);
	data["0_118_21"]=tmp[0];
}
_g.calc0_118_22 = function(){
	data["0_118_22"]=data["0_118_7"];
}
_g.calc0_119_0 = function(){
	data["0_119_0"]=_g.add(data["0_118_0"],1 );
}
_g.calc0_119_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_119_1"],data["0_119_2"]);
	data["0_119_21"]=tmp[0];
}
_g.calc0_119_22 = function(){
	data["0_119_22"]=data["0_119_7"];
}
_g.calc0_120_0 = function(){
	data["0_120_0"]=_g.add(data["0_119_0"],1 );
}
_g.calc0_120_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_120_1"],data["0_120_2"]);
	data["0_120_21"]=tmp[0];
}
_g.calc0_120_22 = function(){
	data["0_120_22"]=data["0_120_7"];
}
_g.calc0_121_0 = function(){
	data["0_121_0"]=_g.add(data["0_120_0"],1 );
}
_g.calc0_121_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_121_1"],data["0_121_2"]);
	data["0_121_21"]=tmp[0];
}
_g.calc0_121_22 = function(){
	data["0_121_22"]=data["0_121_7"];
}
_g.calc0_122_0 = function(){
	data["0_122_0"]=_g.add(data["0_121_0"],1 );
}
_g.calc0_122_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_122_1"],data["0_122_2"]);
	data["0_122_21"]=tmp[0];
}
_g.calc0_122_22 = function(){
	data["0_122_22"]=data["0_122_7"];
}
_g.calc0_123_0 = function(){
	data["0_123_0"]=_g.add(data["0_122_0"],1 );
}
_g.calc0_123_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_123_1"],data["0_123_2"]);
	data["0_123_21"]=tmp[0];
}
_g.calc0_123_22 = function(){
	data["0_123_22"]=data["0_123_7"];
}
_g.calc0_124_0 = function(){
	data["0_124_0"]=_g.add(data["0_123_0"],1 );
}
_g.calc0_124_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_124_1"],data["0_124_2"]);
	data["0_124_21"]=tmp[0];
}
_g.calc0_124_22 = function(){
	data["0_124_22"]=data["0_124_7"];
}
_g.calc0_125_0 = function(){
	data["0_125_0"]=_g.add(data["0_124_0"],1 );
}
_g.calc0_125_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_125_1"],data["0_125_2"]);
	data["0_125_21"]=tmp[0];
}
_g.calc0_125_22 = function(){
	data["0_125_22"]=data["0_125_7"];
}
_g.calc0_126_0 = function(){
	data["0_126_0"]=_g.add(data["0_125_0"],1 );
}
_g.calc0_126_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_126_1"],data["0_126_2"]);
	data["0_126_21"]=tmp[0];
}
_g.calc0_126_22 = function(){
	data["0_126_22"]=data["0_126_7"];
}
_g.calc0_127_0 = function(){
	data["0_127_0"]=_g.add(data["0_126_0"],1 );
}
_g.calc0_127_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_127_1"],data["0_127_2"]);
	data["0_127_21"]=tmp[0];
}
_g.calc0_127_22 = function(){
	data["0_127_22"]=data["0_127_7"];
}
_g.calc0_128_0 = function(){
	data["0_128_0"]=_g.add(data["0_127_0"],1 );
}
_g.calc0_128_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_128_1"],data["0_128_2"]);
	data["0_128_21"]=tmp[0];
}
_g.calc0_128_22 = function(){
	data["0_128_22"]=data["0_128_7"];
}
_g.calc0_129_0 = function(){
	data["0_129_0"]=_g.add(data["0_128_0"],1 );
}
_g.calc0_129_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_129_1"],data["0_129_2"]);
	data["0_129_21"]=tmp[0];
}
_g.calc0_129_22 = function(){
	data["0_129_22"]=data["0_129_7"];
}
_g.calc0_130_0 = function(){
	data["0_130_0"]=_g.add(data["0_129_0"],1 );
}
_g.calc0_130_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_130_1"],data["0_130_2"]);
	data["0_130_21"]=tmp[0];
}
_g.calc0_130_22 = function(){
	data["0_130_22"]=data["0_130_7"];
}
_g.calc0_131_0 = function(){
	data["0_131_0"]=_g.add(data["0_130_0"],1 );
}
_g.calc0_131_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_131_1"],data["0_131_2"]);
	data["0_131_21"]=tmp[0];
}
_g.calc0_131_22 = function(){
	data["0_131_22"]=data["0_131_7"];
}
_g.calc0_132_0 = function(){
	data["0_132_0"]=_g.add(data["0_131_0"],1 );
}
_g.calc0_132_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_132_1"],data["0_132_2"]);
	data["0_132_21"]=tmp[0];
}
_g.calc0_132_22 = function(){
	data["0_132_22"]=data["0_132_7"];
}
_g.calc0_133_0 = function(){
	data["0_133_0"]=_g.add(data["0_132_0"],1 );
}
_g.calc0_133_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_133_1"],data["0_133_2"]);
	data["0_133_21"]=tmp[0];
}
_g.calc0_133_22 = function(){
	data["0_133_22"]=data["0_133_7"];
}
_g.calc0_134_0 = function(){
	data["0_134_0"]=_g.add(data["0_133_0"],1 );
}
_g.calc0_134_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_134_1"],data["0_134_2"]);
	data["0_134_21"]=tmp[0];
}
_g.calc0_134_22 = function(){
	data["0_134_22"]=data["0_134_7"];
}
_g.calc0_135_0 = function(){
	data["0_135_0"]=_g.add(data["0_134_0"],1 );
}
_g.calc0_135_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_135_1"],data["0_135_2"]);
	data["0_135_21"]=tmp[0];
}
_g.calc0_135_22 = function(){
	data["0_135_22"]=data["0_135_7"];
}
_g.calc0_136_0 = function(){
	data["0_136_0"]=_g.add(data["0_135_0"],1 );
}
_g.calc0_136_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_136_1"],data["0_136_2"]);
	data["0_136_21"]=tmp[0];
}
_g.calc0_136_22 = function(){
	data["0_136_22"]=data["0_136_7"];
}
_g.calc0_137_0 = function(){
	data["0_137_0"]=_g.add(data["0_136_0"],1 );
}
_g.calc0_137_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_137_1"],data["0_137_2"]);
	data["0_137_21"]=tmp[0];
}
_g.calc0_137_22 = function(){
	data["0_137_22"]=data["0_137_7"];
}
_g.calc0_138_0 = function(){
	data["0_138_0"]=_g.add(data["0_137_0"],1 );
}
_g.calc0_138_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_138_1"],data["0_138_2"]);
	data["0_138_21"]=tmp[0];
}
_g.calc0_138_22 = function(){
	data["0_138_22"]=data["0_138_7"];
}
_g.calc0_139_0 = function(){
	data["0_139_0"]=_g.add(data["0_138_0"],1 );
}
_g.calc0_139_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_139_1"],data["0_139_2"]);
	data["0_139_21"]=tmp[0];
}
_g.calc0_139_22 = function(){
	data["0_139_22"]=data["0_139_7"];
}
_g.calc0_140_0 = function(){
	data["0_140_0"]=_g.add(data["0_139_0"],1 );
}
_g.calc0_140_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_140_1"],data["0_140_2"]);
	data["0_140_21"]=tmp[0];
}
_g.calc0_140_22 = function(){
	data["0_140_22"]=data["0_140_7"];
}
_g.calc0_141_0 = function(){
	data["0_141_0"]=_g.add(data["0_140_0"],1 );
}
_g.calc0_141_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_141_1"],data["0_141_2"]);
	data["0_141_21"]=tmp[0];
}
_g.calc0_141_22 = function(){
	data["0_141_22"]=data["0_141_7"];
}
_g.calc0_142_0 = function(){
	data["0_142_0"]=_g.add(data["0_141_0"],1 );
}
_g.calc0_142_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_142_1"],data["0_142_2"]);
	data["0_142_21"]=tmp[0];
}
_g.calc0_142_22 = function(){
	data["0_142_22"]=data["0_142_7"];
}
_g.calc0_143_0 = function(){
	data["0_143_0"]=_g.add(data["0_142_0"],1 );
}
_g.calc0_143_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_143_1"],data["0_143_2"]);
	data["0_143_21"]=tmp[0];
}
_g.calc0_143_22 = function(){
	data["0_143_22"]=data["0_143_7"];
}
_g.calc0_144_0 = function(){
	data["0_144_0"]=_g.add(data["0_143_0"],1 );
}
_g.calc0_144_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_144_1"],data["0_144_2"]);
	data["0_144_21"]=tmp[0];
}
_g.calc0_144_22 = function(){
	data["0_144_22"]=data["0_144_7"];
}
_g.calc0_145_0 = function(){
	data["0_145_0"]=_g.add(data["0_144_0"],1 );
}
_g.calc0_145_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_145_1"],data["0_145_2"]);
	data["0_145_21"]=tmp[0];
}
_g.calc0_145_22 = function(){
	data["0_145_22"]=data["0_145_7"];
}
_g.calc0_146_0 = function(){
	data["0_146_0"]=_g.add(data["0_145_0"],1 );
}
_g.calc0_146_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_146_1"],data["0_146_2"]);
	data["0_146_21"]=tmp[0];
}
_g.calc0_146_22 = function(){
	data["0_146_22"]=data["0_146_7"];
}
_g.calc0_147_0 = function(){
	data["0_147_0"]=_g.add(data["0_146_0"],1 );
}
_g.calc0_147_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_147_1"],data["0_147_2"]);
	data["0_147_21"]=tmp[0];
}
_g.calc0_147_22 = function(){
	data["0_147_22"]=data["0_147_7"];
}
_g.calc0_148_0 = function(){
	data["0_148_0"]=_g.add(data["0_147_0"],1 );
}
_g.calc0_148_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_148_1"],data["0_148_2"]);
	data["0_148_21"]=tmp[0];
}
_g.calc0_148_22 = function(){
	data["0_148_22"]=data["0_148_7"];
}
_g.calc0_149_0 = function(){
	data["0_149_0"]=_g.add(data["0_148_0"],1 );
}
_g.calc0_149_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_149_1"],data["0_149_2"]);
	data["0_149_21"]=tmp[0];
}
_g.calc0_149_22 = function(){
	data["0_149_22"]=data["0_149_7"];
}
_g.calc0_150_0 = function(){
	data["0_150_0"]=_g.add(data["0_149_0"],1 );
}
_g.calc0_150_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_150_1"],data["0_150_2"]);
	data["0_150_21"]=tmp[0];
}
_g.calc0_150_22 = function(){
	data["0_150_22"]=data["0_150_7"];
}
_g.calc0_151_0 = function(){
	data["0_151_0"]=_g.add(data["0_150_0"],1 );
}
_g.calc0_151_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_151_1"],data["0_151_2"]);
	data["0_151_21"]=tmp[0];
}
_g.calc0_151_22 = function(){
	data["0_151_22"]=data["0_151_7"];
}
_g.calc0_152_0 = function(){
	data["0_152_0"]=_g.add(data["0_151_0"],1 );
}
_g.calc0_152_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_152_1"],data["0_152_2"]);
	data["0_152_21"]=tmp[0];
}
_g.calc0_152_22 = function(){
	data["0_152_22"]=data["0_152_7"];
}
_g.calc0_153_0 = function(){
	data["0_153_0"]=_g.add(data["0_152_0"],1 );
}
_g.calc0_153_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_153_1"],data["0_153_2"]);
	data["0_153_21"]=tmp[0];
}
_g.calc0_153_22 = function(){
	data["0_153_22"]=data["0_153_7"];
}
_g.calc0_154_0 = function(){
	data["0_154_0"]=_g.add(data["0_153_0"],1 );
}
_g.calc0_154_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_154_1"],data["0_154_2"]);
	data["0_154_21"]=tmp[0];
}
_g.calc0_154_22 = function(){
	data["0_154_22"]=data["0_154_7"];
}
_g.calc0_155_0 = function(){
	data["0_155_0"]=_g.add(data["0_154_0"],1 );
}
_g.calc0_155_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_155_1"],data["0_155_2"]);
	data["0_155_21"]=tmp[0];
}
_g.calc0_155_22 = function(){
	data["0_155_22"]=data["0_155_7"];
}
_g.calc0_156_0 = function(){
	data["0_156_0"]=_g.add(data["0_155_0"],1 );
}
_g.calc0_156_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_156_1"],data["0_156_2"]);
	data["0_156_21"]=tmp[0];
}
_g.calc0_156_22 = function(){
	data["0_156_22"]=data["0_156_7"];
}
_g.calc0_157_0 = function(){
	data["0_157_0"]=_g.add(data["0_156_0"],1 );
}
_g.calc0_157_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_157_1"],data["0_157_2"]);
	data["0_157_21"]=tmp[0];
}
_g.calc0_157_22 = function(){
	data["0_157_22"]=data["0_157_7"];
}
_g.calc0_158_0 = function(){
	data["0_158_0"]=_g.add(data["0_157_0"],1 );
}
_g.calc0_158_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_158_1"],data["0_158_2"]);
	data["0_158_21"]=tmp[0];
}
_g.calc0_158_22 = function(){
	data["0_158_22"]=data["0_158_7"];
}
_g.calc0_159_0 = function(){
	data["0_159_0"]=_g.add(data["0_158_0"],1 );
}
_g.calc0_159_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_159_1"],data["0_159_2"]);
	data["0_159_21"]=tmp[0];
}
_g.calc0_159_22 = function(){
	data["0_159_22"]=data["0_159_7"];
}
_g.calc0_160_0 = function(){
	data["0_160_0"]=_g.add(data["0_159_0"],1 );
}
_g.calc0_160_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_160_1"],data["0_160_2"]);
	data["0_160_21"]=tmp[0];
}
_g.calc0_160_22 = function(){
	data["0_160_22"]=data["0_160_7"];
}
_g.calc0_161_0 = function(){
	data["0_161_0"]=_g.add(data["0_160_0"],1 );
}
_g.calc0_161_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_161_1"],data["0_161_2"]);
	data["0_161_21"]=tmp[0];
}
_g.calc0_161_22 = function(){
	data["0_161_22"]=data["0_161_7"];
}
_g.calc0_162_0 = function(){
	data["0_162_0"]=_g.add(data["0_161_0"],1 );
}
_g.calc0_162_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_162_1"],data["0_162_2"]);
	data["0_162_21"]=tmp[0];
}
_g.calc0_162_22 = function(){
	data["0_162_22"]=data["0_162_7"];
}
_g.calc0_163_0 = function(){
	data["0_163_0"]=_g.add(data["0_162_0"],1 );
}
_g.calc0_163_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_163_1"],data["0_163_2"]);
	data["0_163_21"]=tmp[0];
}
_g.calc0_163_22 = function(){
	data["0_163_22"]=data["0_163_7"];
}
_g.calc0_164_0 = function(){
	data["0_164_0"]=_g.add(data["0_163_0"],1 );
}
_g.calc0_164_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_164_1"],data["0_164_2"]);
	data["0_164_21"]=tmp[0];
}
_g.calc0_164_22 = function(){
	data["0_164_22"]=data["0_164_7"];
}
_g.calc0_165_0 = function(){
	data["0_165_0"]=_g.add(data["0_164_0"],1 );
}
_g.calc0_165_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_165_1"],data["0_165_2"]);
	data["0_165_21"]=tmp[0];
}
_g.calc0_165_22 = function(){
	data["0_165_22"]=data["0_165_7"];
}
_g.calc0_166_0 = function(){
	data["0_166_0"]=_g.add(data["0_165_0"],1 );
}
_g.calc0_166_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_166_1"],data["0_166_2"]);
	data["0_166_21"]=tmp[0];
}
_g.calc0_166_22 = function(){
	data["0_166_22"]=data["0_166_7"];
}
_g.calc0_167_0 = function(){
	data["0_167_0"]=_g.add(data["0_166_0"],1 );
}
_g.calc0_167_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_167_1"],data["0_167_2"]);
	data["0_167_21"]=tmp[0];
}
_g.calc0_167_22 = function(){
	data["0_167_22"]=data["0_167_7"];
}
_g.calc0_168_0 = function(){
	data["0_168_0"]=_g.add(data["0_167_0"],1 );
}
_g.calc0_168_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_168_1"],data["0_168_2"]);
	data["0_168_21"]=tmp[0];
}
_g.calc0_168_22 = function(){
	data["0_168_22"]=data["0_168_7"];
}
_g.calc0_169_0 = function(){
	data["0_169_0"]=_g.add(data["0_168_0"],1 );
}
_g.calc0_169_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_169_1"],data["0_169_2"]);
	data["0_169_21"]=tmp[0];
}
_g.calc0_169_22 = function(){
	data["0_169_22"]=data["0_169_7"];
}
_g.calc0_170_0 = function(){
	data["0_170_0"]=_g.add(data["0_169_0"],1 );
}
_g.calc0_170_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_170_1"],data["0_170_2"]);
	data["0_170_21"]=tmp[0];
}
_g.calc0_170_22 = function(){
	data["0_170_22"]=data["0_170_7"];
}
_g.calc0_171_0 = function(){
	data["0_171_0"]=_g.add(data["0_170_0"],1 );
}
_g.calc0_171_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_171_1"],data["0_171_2"]);
	data["0_171_21"]=tmp[0];
}
_g.calc0_171_22 = function(){
	data["0_171_22"]=data["0_171_7"];
}
_g.calc0_172_0 = function(){
	data["0_172_0"]=_g.add(data["0_171_0"],1 );
}
_g.calc0_172_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_172_1"],data["0_172_2"]);
	data["0_172_21"]=tmp[0];
}
_g.calc0_172_22 = function(){
	data["0_172_22"]=data["0_172_7"];
}
_g.calc0_173_0 = function(){
	data["0_173_0"]=_g.add(data["0_172_0"],1 );
}
_g.calc0_173_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_173_1"],data["0_173_2"]);
	data["0_173_21"]=tmp[0];
}
_g.calc0_173_22 = function(){
	data["0_173_22"]=data["0_173_7"];
}
_g.calc0_174_0 = function(){
	data["0_174_0"]=_g.add(data["0_173_0"],1 );
}
_g.calc0_174_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_174_1"],data["0_174_2"]);
	data["0_174_21"]=tmp[0];
}
_g.calc0_174_22 = function(){
	data["0_174_22"]=data["0_174_7"];
}
_g.calc0_175_0 = function(){
	data["0_175_0"]=_g.add(data["0_174_0"],1 );
}
_g.calc0_175_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_175_1"],data["0_175_2"]);
	data["0_175_21"]=tmp[0];
}
_g.calc0_175_22 = function(){
	data["0_175_22"]=data["0_175_7"];
}
_g.calc0_176_0 = function(){
	data["0_176_0"]=_g.add(data["0_175_0"],1 );
}
_g.calc0_176_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_176_1"],data["0_176_2"]);
	data["0_176_21"]=tmp[0];
}
_g.calc0_176_22 = function(){
	data["0_176_22"]=data["0_176_7"];
}
_g.calc0_177_0 = function(){
	data["0_177_0"]=_g.add(data["0_176_0"],1 );
}
_g.calc0_177_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_177_1"],data["0_177_2"]);
	data["0_177_21"]=tmp[0];
}
_g.calc0_177_22 = function(){
	data["0_177_22"]=data["0_177_7"];
}
_g.calc0_178_0 = function(){
	data["0_178_0"]=_g.add(data["0_177_0"],1 );
}
_g.calc0_178_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_178_1"],data["0_178_2"]);
	data["0_178_21"]=tmp[0];
}
_g.calc0_178_22 = function(){
	data["0_178_22"]=data["0_178_7"];
}
_g.calc0_179_0 = function(){
	data["0_179_0"]=_g.add(data["0_178_0"],1 );
}
_g.calc0_179_21 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["0_179_1"],data["0_179_2"]);
	data["0_179_21"]=tmp[0];
}
_g.calc0_179_22 = function(){
	data["0_179_22"]=data["0_179_7"];
}
_g.calc1_5_25 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["1_9_3"],aptg[31],2,0);
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_5_25"]=tmp[1];
}
_g.calc1_6_25 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_6_3"],data["0_14_18"])) &&  ((_g.num(data["1_24_3"])) >= (_g.num(5000)))	)tmp[0]=true; 
	tmp[1]=_g.CONCATENATE(data["1_6_3"],data["1_7_3"]);
	tmp[2]=_g.VLOOKUP(tmp[1],aptg[32],2,0);
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]="Non - Toxic";
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_6_25"]=tmp[4];
}
_g.calc1_7_25 = function(){
	data["1_7_25"]=_g.add(data["1_18_3"],data["1_17_3"] );
}
_g.calc1_8_25 = function(){
var tmp = [];
	tmp[0]=_g.PMT(_g.div(data["1_20_3"],12 ),data["1_19_3"],(-_g.num(data["1_18_3"])));
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_8_25"]=tmp[1];
}
_g.calc1_26_3 = function(){
	data["1_26_3"]=data["2_11_1"];
}
_g.calc1_30_1 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE(data["1_6_25"]," profile");
	data["1_30_1"]=tmp[0];
}
_g.calc1_31_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_6_25"],"")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_6_25"];
	}
	data["1_31_13"]=tmp[0];
}
_g.calc1_31_14 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_31_13"],data["1_37_24"])) ||  (_g.equal(data["1_31_13"],data["1_37_25"])) ||  (_g.equal(data["1_31_13"],data["1_37_26"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( (tmp[0]) ){
		tmp[1]="Not met";
	}else{
		tmp[1]="Met";
	}
	tmp[2]=0;
	if( (_g.equal(data["1_31_13"],"Blank")) ){
		tmp[2]="Blank";
	}else{
		tmp[2]=tmp[1];
	}
	data["1_31_14"]=tmp[2];
}
_g.calc1_31_16 = function(){
	data["1_31_16"]=data["1_31_13"];
}
_g.calc1_31_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_31_16"],data["1_37_24"])) ){
		tmp[0]="Not met";
	}else{
		tmp[0]="Met";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_31_16"],"Blank")) ){
		tmp[1]="Blank";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_31_19"]=tmp[1];
}
_g.calc1_32_2 = function(){
	data["1_32_2"]=_g.add(data["1_31_2"],1 );
}
_g.calc1_32_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_10_3"],"")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_10_3"];
	}
	data["1_32_13"]=tmp[0];
}
_g.calc1_32_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_32_13"],"Blank")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_32_13"];
	}
	data["1_32_14"]=tmp[0];
}
_g.calc1_32_16 = function(){
	data["1_32_16"]=data["1_32_13"];
}
_g.calc1_32_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_32_16"],"Blank")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_32_16"];
	}
	data["1_32_19"]=tmp[0];
}
_g.calc1_33_2 = function(){
	data["1_33_2"]=_g.add(data["1_32_2"],1 );
}
_g.calc1_33_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_11_3"],"")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_11_3"];
	}
	data["1_33_13"]=tmp[0];
}
_g.calc1_33_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_33_13"],"No")) ){
		tmp[0]="Not met";
	}else{
		tmp[0]="Met";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_33_13"],"Blank")) ){
		tmp[1]="Blank";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_33_14"]=tmp[1];
}
_g.calc1_33_16 = function(){
	data["1_33_16"]=data["1_33_13"];
}
_g.calc1_33_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_33_16"],"Policy not met")) ){
		tmp[0]="Not met";
	}else{
		tmp[0]="Met";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_33_16"],"Blank")) ){
		tmp[1]="Blank";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_33_19"]=tmp[1];
}
_g.calc1_33_23 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[0]="Fill Tenure in Mandatory info";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[1]="Fill IRR in Mandatory info";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_33_23"]=tmp[1];
}
_g.calc1_34_2 = function(){
	data["1_34_2"]=_g.add(data["1_33_2"],1 );
}
_g.calc1_34_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_17_3"],"")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_17_3"];
	}
	data["1_34_13"]=tmp[0];
}
_g.calc1_34_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_17_3"])) > (_g.num(data["1_40_27"]))) ){
		tmp[0]="Not Met";
	}else{
		tmp[0]="Met";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_34_13"],"Blank")) ){
		tmp[1]="Blank";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_34_14"]=tmp[1];
}
_g.calc1_35_2 = function(){
	data["1_35_2"]=_g.add(data["1_34_2"],1 );
}
_g.calc1_35_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_14_3"],"")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_14_3"];
	}
	data["1_35_13"]=tmp[0];
}
_g.calc1_35_14 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_41_24"],data["1_8_3"])) &&  ((_g.num(data["1_35_13"])) >= (_g.num(data["1_41_25"])))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num(data["1_35_13"])) >= (_g.num(data["1_41_27"]))) ){
		tmp[1]="Met";
	}else{
		tmp[1]="Not Met";
	}
	tmp[2]=0;
	if( (tmp[0]) ){
		tmp[2]="Met";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (_g.equal(data["1_35_13"],"Blank")) ){
		tmp[3]="Blank";
	}else{
		tmp[3]=tmp[2];
	}
	data["1_35_14"]=tmp[3];
}
_g.calc1_36_2 = function(){
	data["1_36_2"]=_g.add(data["1_35_2"],1 );
}
_g.calc1_36_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_12_3"],"")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_12_3"];
	}
	data["1_36_13"]=tmp[0];
}
_g.calc1_36_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_36_13"])) >= (_g.num(data["1_42_24"]))) ){
		tmp[0]="Met";
	}else{
		tmp[0]="Not Met";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_36_13"],"Blank")) ){
		tmp[1]="Blank";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_36_14"]=tmp[1];
}
_g.calc1_36_16 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_12_3"],"")) ){
		tmp[0]="Blank";
	}else{
		tmp[0]=data["1_12_3"];
	}
	data["1_36_16"]=tmp[0];
}
_g.calc1_36_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_36_16"])) >= (_g.num(data["1_42_24"]))) ){
		tmp[0]="Met";
	}else{
		tmp[0]="Not Met";
	}
	tmp[1]=0;
	if( (_g.equal(data["1_36_16"],"Blank")) ){
		tmp[1]="Blank";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_36_19"]=tmp[1];
}
_g.calc1_37_13 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(_g.COUNTIF(aptg[33],"Met"),6)) ){
		tmp[0]="Eligible for Surrogate Program";
	}else{
		tmp[0]="Not eligible for Surrogate Program";
	}
	data["1_37_13"]=tmp[0];
}
_g.calc1_37_16 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(_g.COUNTIF(aptg[34],"Met"),4)) ){
		tmp[0]="Eligible for Income Program";
	}else{
		tmp[0]="Not eligible for Income Program";
	}
	data["1_37_16"]=tmp[0];
}
_g.calc1_38_23 = function(){
	data["1_38_23"]=data["1_32_3"];
}
_g.calc1_40_1 = function(){
var tmp = [];
	tmp[0]=_g.MATCH(data["1_7_3"],aptg[35],0);
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_40_1"]=tmp[1];
}
_g.calc1_40_2 = function(){
var tmp = [];
	tmp[0]=_g.MATCH(data["1_8_3"],aptg[36],0);
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_40_2"]=tmp[1];
}
_g.calc1_40_4 = function(){
var tmp = [];
	tmp[0]=_g.INDEX(aptg[37],data["1_40_1"],data["1_40_2"]);
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_40_4"]=tmp[1];
}
_g.calc1_42_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_13_3"])) > (_g.num(1))) ){
		tmp[0]="USL Norms not met";
	}else{
		tmp[0]=data["1_14_3"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_37_13"],"Not eligible for Surrogate Program")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"");
	data["1_42_4"]=tmp[2];
}
_g.calc1_42_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_15_3"])) > (_g.num(0))) ){
		tmp[0]=data["1_15_3"];
	}else{
		tmp[0]="CC A/C Reqd";
	}
	tmp[1]=0;
	if( ((_g.num(data["1_13_3"])) > (_g.num(2))) ){
		tmp[1]="USL>2";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_37_13"],"Not eligible for Surrogate Program")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=_g.IFERROR(tmp[2],"");
	data["1_42_9"]=tmp[3];
}
_g.calc1_42_14 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("Fund under CC prog as CC Limit > 35 lacs");
	tmp[1]=false;
	if( (_g.equal(data["1_8_3"],"Trader")) &&  ((_g.num(data["1_21_3"])) <= (_g.num(3)))	)tmp[1]=true; 
	tmp[2]=false;
	if( (_g.equal(data["1_8_3"],"Service")) &&  ((_g.num(data["1_21_3"])) <= (_g.num(3)))	)tmp[2]=true; 
	tmp[3]=_g.CONCATENATE("Funding not allowed in ",data["1_47_27"]);
	tmp[4]=0;
	if( (_g.equal(data["1_5_25"],data["1_47_27"])) ){
		tmp[4]=tmp[3];
	}else{
		tmp[4]=(_g.div((_g.add(data["1_21_3"],data["1_22_3"] )),2 ));
	}
	tmp[5]=0;
	if( (tmp[2]) ){
		tmp[5]="ITR Inc <3 lacs";
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (tmp[1]) ){
		tmp[6]="ITR Inc <3 lacs";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=0;
	if( ((_g.num(data["1_21_3"])) > (_g.num(data["1_22_3"]))) ){
		tmp[7]="Current yr Inc < Prev yr Inc";
	}else{
		tmp[7]=tmp[6];
	}
	tmp[8]=0;
	if( ((_g.num(data["1_13_3"])) > (_g.num(1))) ){
		tmp[8]="USL Norms not met";
	}else{
		tmp[8]=tmp[7];
	}
	tmp[9]=0;
	if( ((_g.num(data["1_15_3"])) > (_g.num(35))) ){
		tmp[9]=tmp[0];
	}else{
		tmp[9]=tmp[8];
	}
	tmp[10]=0;
	if( (_g.equal(data["1_37_13"],"Not eligible for Surrogate Program")) ){
		tmp[10]="NA";
	}else{
		tmp[10]=tmp[9];
	}
	tmp[11]=_g.IFERROR(tmp[10],"");
	data["1_42_14"]=tmp[11];
}
_g.calc1_42_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_13_3"])) > (_g.num(2))) ){
		tmp[0]="USL>2";
	}else{
		tmp[0]=data["1_23_3"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_37_13"],"Not eligible for Surrogate Program")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"NA");
	data["1_42_19"]=tmp[2];
}
_g.calc1_42_23 = function(){
	data["1_42_23"]=data["1_36_3"];
}
_g.calc1_43_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_42_4"],"ABB:EMI<2")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_40_4"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_42_4"],"USL Norms not met")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_42_4"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=_g.IFERROR(tmp[2],"");
	data["1_43_4"]=tmp[3];
}
_g.calc1_43_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_42_9"],"USL>2")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.div(data["1_49_25"],100000 );
	}
	tmp[1]=0;
	if( (_g.equal(data["1_42_9"],"NA")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_43_9"]=tmp[1];
}
_g.calc1_43_14 = function(){
var tmp = [];
	tmp[0]=_g.VLOOKUP(data["1_8_3"],aptg[38],2,0);
	tmp[1]=0;
	if( (_g.equal(data["1_42_14"],"NA")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_5_25"],data["1_47_27"])) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=_g.IFERROR(tmp[2],"NA");
	data["1_43_14"]=tmp[3];
}
_g.calc1_43_17 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("Imputed Monthly Income('A' *",_g.mul(data["1_49_30"],100 ),"%)");
	data["1_43_17"]=tmp[0];
}
_g.calc1_43_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_42_19"],"USL>2")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.mul(data["1_42_19"],data["1_49_30"] );
	}
	tmp[1]=0;
	if( (_g.equal(data["1_42_19"],"NA")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"NA");
	data["1_43_19"]=tmp[2];
}
_g.calc1_44_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.div((_g.mul(data["1_42_4"],data["1_43_4"] )),12 );
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_44_4"]=tmp[1];
}
_g.calc1_44_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.div(data["1_50_25"],100000 );
	}
	data["1_44_9"]=tmp[0];
}
_g.calc1_44_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_14"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.div((_g.mul(data["1_42_14"],data["1_43_14"] )),12 );
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_44_14"]=tmp[1];
}
_g.calc1_45_2 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("Monthly Imputed Inc (",_g.mul(data["1_51_23"],100 ),"% *DIR)");
	data["1_45_2"]=tmp[0];
}
_g.calc1_45_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=(_g.mul(data["1_44_4"],data["1_51_23"] ));
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_45_4"]=tmp[1];
}
_g.calc1_45_9 = function(){
var tmp = [];
	tmp[0]=false;
	if( ((_g.num(data["1_42_9"])) >= (_g.num(data["1_43_9"]))) &&  ((_g.num(data["1_42_9"])) <= (_g.num(data["1_44_9"])))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num(data["1_42_9"])) > (_g.num(data["1_44_9"]))) ){
		tmp[1]="CC Limit > reqd limit";
	}
	tmp[2]=0;
	if( ((_g.num(data["1_42_9"])) < (_g.num(data["1_43_9"]))) ){
		tmp[2]="CC Limit < reqd limit";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=data["1_42_9"];
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_45_9"]=tmp[4];
}
_g.calc1_45_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_16_3"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_45_14"]=tmp[1];
}
_g.calc1_45_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.sub(data["1_43_19"],data["1_44_19"] );
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_45_19"]=tmp[1];
}
_g.calc1_46_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_16_3"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_46_4"]=tmp[1];
}
_g.calc1_46_7 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("Eligible LA: (",_g.mul(data["1_52_25"],100 )," % * 'C')");
	data["1_46_7"]=tmp[0];
}
_g.calc1_46_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.mul(data["1_45_9"],data["1_52_25"] );
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_46_9"]=tmp[1];
}
_g.calc1_46_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=(_g.sub(data["1_44_14"],data["1_45_14"] ));
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_46_14"]=tmp[1];
}
_g.calc1_46_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_52_30"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_46_19"]=tmp[1];
}
_g.calc1_47_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.sub(data["1_45_4"],data["1_46_4"] );
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_47_4"]=tmp[1];
}
_g.calc1_47_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_53_25"];
	}
	data["1_47_9"]=tmp[0];
}
_g.calc1_47_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_53_27"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_47_14"]=tmp[1];
}
_g.calc1_47_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_53_30"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_47_19"]=tmp[1];
}
_g.calc1_48_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_54_23"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_48_4"]=tmp[1];
}
_g.calc1_48_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_54_25"];
	}
	data["1_48_9"]=tmp[0];
}
_g.calc1_48_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_54_27"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"NA");
	data["1_48_14"]=tmp[1];
}
_g.calc1_48_19 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("tenure < ",data["1_46_19"],"m");
	tmp[1]=_g.CONCATENATE("tenure > ",data["1_47_19"],"m");
	tmp[2]=_g.PV(_g.div(data["1_20_3"],12 ),data["1_19_3"],(-_g.num(data["1_45_19"])));
	tmp[3]=0;
	if( ((_g.num(data["1_19_3"])) > (_g.num(data["1_47_19"]))) ){
		tmp[3]=tmp[1];
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( ((_g.num(data["1_19_3"])) < (_g.num(data["1_46_19"]))) ){
		tmp[4]=tmp[0];
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[5]="Fill Tenure in Mandatory info";
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[6]="Fill IRR in Mandatory info";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=0;
	if( (_g.equal(data["1_43_19"],"NA")) ){
		tmp[7]="NA";
	}else{
		tmp[7]=tmp[6];
	}
	tmp[8]=_g.IFERROR(tmp[7],"NA");
	data["1_48_19"]=tmp[8];
}
_g.calc1_49_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_55_23"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_49_4"]=tmp[1];
}
_g.calc1_49_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_46_9"])) > (_g.num(data["1_48_9"]))) ){
		tmp[0]=data["1_48_9"];
	}else{
		tmp[0]=data["1_46_9"];
	}
	tmp[1]=0;
	if( ((_g.num(data["1_46_9"])) < (_g.num(data["1_47_9"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[2]="Fill Tenure in Mandatory info";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[3]="Fill IRR in Mandatory info";
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( (_g.equal(data["1_46_9"],"NA")) ){
		tmp[4]="NA";
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=_g.IFERROR(tmp[4],"");
	data["1_49_9"]=tmp[5];
}
_g.calc1_49_14 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("tenure < ",data["1_47_14"],"m");
	tmp[1]=_g.CONCATENATE("tenure > ",data["1_48_14"],"m");
	tmp[2]=_g.PV(_g.div(data["1_20_3"],12 ),data["1_19_3"],(-_g.num(data["1_46_14"])));
	tmp[3]=0;
	if( ((_g.num(data["1_19_3"])) > (_g.num(data["1_48_14"]))) ){
		tmp[3]=tmp[1];
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( ((_g.num(data["1_19_3"])) < (_g.num(data["1_47_14"]))) ){
		tmp[4]=tmp[0];
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[5]="Fill Tenure in Mandatory info";
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[6]="Fill IRR in Mandatory info";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[7]="NA";
	}else{
		tmp[7]=tmp[6];
	}
	tmp[8]=_g.IFERROR(tmp[7],"NA");
	data["1_49_14"]=tmp[8];
}
_g.calc1_49_19 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_48_19"],"Fill IRR in Mandatory info")) ||  (_g.equal(data["1_48_19"],"Fill Tenure in Mandatory info"))	)tmp[0]=true; 
	tmp[1]=0;
	if( (tmp[0]) ){
		tmp[1]="NA";
	}else{
		tmp[1]=data["1_55_30"];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_43_19"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=_g.IFERROR(tmp[2],"NA");
	data["1_49_19"]=tmp[3];
}
_g.calc1_50_4 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("tenure < ",data["1_48_4"],"m");
	tmp[1]=_g.CONCATENATE("tenure > ",data["1_49_4"],"m");
	tmp[2]=_g.PV(_g.div(data["1_20_3"],12 ),data["1_19_3"],(-_g.num(data["1_47_4"])));
	tmp[3]=0;
	if( ((_g.num(data["1_19_3"])) > (_g.num(data["1_49_4"]))) ){
		tmp[3]=tmp[1];
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( ((_g.num(data["1_19_3"])) < (_g.num(data["1_48_4"]))) ){
		tmp[4]=tmp[0];
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[5]="Fill Tenure in Mandatory info";
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[6]="Fill IRR in Mandatory info";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[7]="NA";
	}else{
		tmp[7]=tmp[6];
	}
	tmp[8]=_g.IFERROR(tmp[7],"NA");
	data["1_50_4"]=tmp[8];
}
_g.calc1_50_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_56_25"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_50_9"]=tmp[1];
}
_g.calc1_50_14 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_49_14"],"Fill IRR in Mandatory info")) ||  (_g.equal(data["1_49_14"],"Fill Tenure in Mandatory info"))	)tmp[0]=true; 
	tmp[1]=0;
	if( (tmp[0]) ){
		tmp[1]="NA";
	}else{
		tmp[1]=data["1_56_27"];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_49_14"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[3]="NA";
	}else{
		tmp[3]=tmp[2];
	}
	data["1_50_14"]=tmp[3];
}
_g.calc1_50_19 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_48_19"],"Fill IRR in Mandatory info")) ||  (_g.equal(data["1_48_19"],"Fill Tenure in Mandatory info"))	)tmp[0]=true; 
	tmp[1]=0;
	if( (tmp[0]) ){
		tmp[1]="NA";
	}else{
		tmp[1]=data["1_56_30"];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_43_19"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=_g.IFERROR(tmp[2],"NA");
	data["1_50_19"]=tmp[3];
}
_g.calc1_51_4 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_50_4"],"Fill IRR in Mandatory info")) ||  (_g.equal(data["1_50_4"],"Fill Tenure in Mandatory info"))	)tmp[0]=true; 
	tmp[1]=0;
	if( (tmp[0]) ){
		tmp[1]="NA";
	}else{
		tmp[1]=data["1_57_23"];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	data["1_51_4"]=tmp[2];
}
_g.calc1_51_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_57_25"];
	}
	data["1_51_9"]=tmp[0];
}
_g.calc1_51_14 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_49_14"],"Fill IRR in Mandatory info")) ||  (_g.equal(data["1_49_14"],"Fill Tenure in Mandatory info"))	)tmp[0]=true; 
	tmp[1]=0;
	if( (tmp[0]) ){
		tmp[1]="NA";
	}else{
		tmp[1]=data["1_57_27"];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_49_14"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[3]="NA";
	}else{
		tmp[3]=tmp[2];
	}
	data["1_51_14"]=tmp[3];
}
_g.calc1_51_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_48_19"])) > (_g.num(data["1_50_19"]))) ){
		tmp[0]=data["1_50_19"];
	}else{
		tmp[0]=data["1_48_19"];
	}
	tmp[1]=0;
	if( ((_g.num(data["1_48_19"])) < (_g.num(data["1_49_19"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"");
	data["1_51_19"]=tmp[2];
}
_g.calc1_52_4 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_43_4"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_58_23"];
	}
	data["1_52_4"]=tmp[0];
}
_g.calc1_52_9 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("tenure < ",data["1_50_9"],"m");
	tmp[1]=_g.CONCATENATE("tenure > ",data["1_51_9"],"m");
	tmp[2]=_g.PMT(_g.div(data["1_20_3"],12 ),data["1_19_3"],(-_g.num(data["1_53_9"])));
	tmp[3]=0;
	if( ((_g.num(data["1_19_3"])) > (_g.num(data["1_51_9"]))) ){
		tmp[3]=tmp[1];
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( ((_g.num(data["1_19_3"])) < (_g.num(data["1_50_9"]))) ){
		tmp[4]=tmp[0];
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[5]="Fill Tenure in Mandatory info";
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[6]="Fill IRR in Mandatory info";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=0;
	if( (_g.equal(data["1_53_9"],"NA")) ){
		tmp[7]="NA";
	}else{
		tmp[7]=tmp[6];
	}
	tmp[8]=0;
	if( (_g.equal(data["1_43_9"],"NA")) ){
		tmp[8]="NA";
	}else{
		tmp[8]=tmp[7];
	}
	tmp[9]=_g.IFERROR(tmp[8],"");
	data["1_52_9"]=tmp[9];
}
_g.calc1_52_14 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("tenure < ",data["1_47_14"],"m");
	tmp[1]=_g.CONCATENATE("tenure > ",data["1_48_14"],"m");
	tmp[2]=0;
	if( ((_g.num(data["1_49_14"])) > (_g.num(data["1_51_14"]))) ){
		tmp[2]=data["1_51_14"];
	}else{
		tmp[2]=data["1_49_14"];
	}
	tmp[3]=0;
	if( ((_g.num(data["1_49_14"])) < (_g.num(data["1_50_14"]))) ){
		tmp[3]="LA < min tickt size";
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( ((_g.num(data["1_19_3"])) > (_g.num(data["1_48_14"]))) ){
		tmp[4]=tmp[1];
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=0;
	if( ((_g.num(data["1_19_3"])) < (_g.num(data["1_47_14"]))) ){
		tmp[5]=tmp[0];
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[6]="Not Eligible";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=_g.IFERROR(tmp[6],"");
	data["1_52_14"]=tmp[7];
}
_g.calc1_53_4 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.equal(data["1_50_4"],"Fill IRR in Mandatory info")) ||  (_g.equal(data["1_50_4"],"Fill Tenure in Mandatory info"))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num(data["1_50_4"])) > (_g.num(data["1_52_4"]))) ){
		tmp[1]=data["1_52_4"];
	}else{
		tmp[1]=data["1_50_4"];
	}
	tmp[2]=0;
	if( ((_g.num(data["1_50_4"])) < (_g.num(data["1_51_4"]))) ){
		tmp[2]="LA < min tickt size";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]="";
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_53_4"]=tmp[4];
}
_g.calc1_53_9 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_46_9"])) < (_g.num(data["1_47_9"]))) ){
		tmp[0]="LA < min tickt size";
	}else{
		tmp[0]=data["1_49_9"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[1]="Fill Tenure in Mandatory info";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[2]="Fill IRR in Mandatory info";
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (_g.equal(data["1_46_9"],"NA")) ){
		tmp[3]="NA";
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_53_9"]=tmp[4];
}
_g.calc1_53_14 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_49_14"])) < (_g.num(data["1_50_14"]))) ){
		tmp[0]="LA < min tickt size";
	}else{
		tmp[0]=data["1_52_14"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[1]="Not Eligible";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"");
	data["1_53_14"]=tmp[2];
}
_g.calc1_53_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_48_19"])) < (_g.num(data["1_49_19"]))) ){
		tmp[0]="LA < min tickt size";
	}else{
		tmp[0]=data["1_51_19"];
	}
	tmp[1]=_g.IFERROR(tmp[0],"");
	data["1_53_19"]=tmp[1];
}
_g.calc1_54_4 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.ISNUMBER(data["1_17_3"])) &&  (_g.ISNUMBER(data["1_53_4"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num((_g.sub(data["1_52_4"],data["1_17_3"] )))) < (_g.num(data["1_51_4"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=_g.sub(data["1_52_4"],data["1_17_3"] );
	}
	tmp[2]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_53_4"] )))) < (_g.num(data["1_52_4"]))) ){
		tmp[2]=data["1_53_4"];
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=tmp[2];
	}else{
		tmp[3]="";
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_54_4"]=tmp[4];
}
_g.calc1_54_9 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.ISNUMBER(data["1_17_3"])) &&  (_g.ISNUMBER(data["1_53_9"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num((_g.sub(data["1_48_9"],data["1_17_3"] )))) < (_g.num(data["1_47_9"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=_g.sub(data["1_48_9"],data["1_17_3"] );
	}
	tmp[2]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_53_9"] )))) < (_g.num(data["1_48_9"]))) ){
		tmp[2]=data["1_53_9"];
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=tmp[2];
	}else{
		tmp[3]="";
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_54_9"]=tmp[4];
}
_g.calc1_54_14 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.ISNUMBER(data["1_17_3"])) &&  (_g.ISNUMBER(data["1_53_14"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num((_g.sub(data["1_51_14"],data["1_17_3"] )))) < (_g.num(data["1_50_14"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=_g.sub(data["1_51_14"],data["1_17_3"] );
	}
	tmp[2]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_53_14"] )))) < (_g.num(data["1_51_14"]))) ){
		tmp[2]=data["1_53_14"];
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=tmp[2];
	}else{
		tmp[3]="";
	}
	tmp[4]=0;
	if( (_g.equal(data["1_44_14"],"NA")) ){
		tmp[4]="Not Eligible";
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=_g.IFERROR(tmp[4],"");
	data["1_54_14"]=tmp[5];
}
_g.calc1_54_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num((_g.sub(data["1_50_19"],data["1_17_3"] )))) < (_g.num(data["1_49_19"]))) ){
		tmp[0]="LA < min tickt size";
	}else{
		tmp[0]=_g.sub(data["1_50_19"],data["1_17_3"] );
	}
	tmp[1]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_53_19"] )))) < (_g.num(data["1_50_19"]))) ){
		tmp[1]=data["1_53_19"];
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"");
	data["1_54_19"]=tmp[2];
}
_g.calc1_60_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_25_3"],"")) ){
		tmp[0]=data["1_14_3"];
	}else{
		tmp[0]=data["1_25_3"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_6_25"],"Toxic")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_37_16"],"Not eligible for Income Program")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	data["1_60_19"]=tmp[2];
}
_g.calc1_61_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_60_19"])) > (_g.num((_g.mul(data["1_24_3"],data["1_67_36"] ))))) ){
		tmp[0]=_g.mul(data["1_24_3"],data["1_67_36"] );
	}else{
		tmp[0]=data["1_60_19"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[1]="NA";
	}else{
		tmp[1]=tmp[0];
	}
	data["1_61_19"]=tmp[1];
}
_g.calc1_62_19 = function(){
	data["1_62_19"]=data["1_40_4"];
}
_g.calc1_63_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_62_19"])) > (_g.num((_g.mul(data["1_26_3"],3 ))))) ){
		tmp[0]=(_g.mul(data["1_26_3"],3 ));
	}else{
		tmp[0]=data["1_62_19"];
	}
	data["1_63_19"]=tmp[0];
}
_g.calc1_64_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.div((_g.mul(data["1_63_19"],data["1_61_19"] )),12 );
	}
	data["1_64_19"]=tmp[0];
}
_g.calc1_65_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.mul(data["1_64_19"],(((70))/100.0) );
	}
	data["1_65_19"]=tmp[0];
}
_g.calc1_66_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_16_3"];
	}
	data["1_66_19"]=tmp[0];
}
_g.calc1_67_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=_g.sub(data["1_65_19"],data["1_66_19"] );
	}
	data["1_67_19"]=tmp[0];
}
_g.calc1_68_4 = function(){
	data["1_68_4"]=_g.mul(data["1_26_3"],data["1_24_3"] );
}
_g.calc1_68_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_74_36"];
	}
	data["1_68_19"]=tmp[0];
}
_g.calc1_69_4 = function(){
	data["1_69_4"]=_g.add(_g.add((_g.mul(data["1_16_3"],12 )),(_g.mul((((12))/100.0),data["1_15_3"] )) ),(_g.mul(data["1_8_25"],12 )) );
}
_g.calc1_69_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[0]="NA";
	}else{
		tmp[0]=data["1_75_36"];
	}
	data["1_69_19"]=tmp[0];
}
_g.calc1_70_4 = function(){
	data["1_70_4"]=_g.div(data["1_68_4"],data["1_69_4"] );
}
_g.calc1_70_19 = function(){
var tmp = [];
	tmp[0]=_g.CONCATENATE("tenure < ",data["1_74_36"],"m");
	tmp[1]=_g.CONCATENATE("tenure > ",data["1_75_36"],"m");
	tmp[2]=_g.PV(_g.div(data["1_20_3"],12 ),data["1_19_3"],(-_g.num(data["1_67_19"])));
	tmp[3]=0;
	if( ((_g.num(data["1_19_3"])) > (_g.num(data["1_75_36"]))) ){
		tmp[3]=tmp[1];
	}else{
		tmp[3]=tmp[2];
	}
	tmp[4]=0;
	if( ((_g.num(data["1_19_3"])) < (_g.num(data["1_74_36"]))) ){
		tmp[4]=tmp[0];
	}else{
		tmp[4]=tmp[3];
	}
	tmp[5]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[5]="Fill Tenure in Mandatory info";
	}else{
		tmp[5]=tmp[4];
	}
	tmp[6]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[6]="Fill IRR in Mandatory info";
	}else{
		tmp[6]=tmp[5];
	}
	tmp[7]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[7]="NA";
	}else{
		tmp[7]=tmp[6];
	}
	data["1_70_19"]=tmp[7];
}
_g.calc1_71_4 = function(){
	data["1_71_4"]=_g.mul(data["1_26_3"],data["1_25_3"] );
}
_g.calc1_71_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[0]="Fill Tenure in Mandatory info";
	}else{
		tmp[0]=data["1_78_36"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[1]="Fill IRR in Mandatory info";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	data["1_71_19"]=tmp[2];
}
_g.calc1_72_4 = function(){
	data["1_72_4"]=_g.mul(data["1_26_3"],data["1_14_3"] );
}
_g.calc1_72_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_19_3"],"")) ){
		tmp[0]="Fill Tenure in Mandatory info";
	}else{
		tmp[0]=data["1_79_36"];
	}
	tmp[1]=0;
	if( (_g.equal(data["1_20_3"],"")) ){
		tmp[1]="Fill IRR in Mandatory info";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=0;
	if( (_g.equal(data["1_60_19"],"NA")) ){
		tmp[2]="NA";
	}else{
		tmp[2]=tmp[1];
	}
	data["1_72_19"]=tmp[2];
}
_g.calc1_73_4 = function(){
	data["1_73_4"]=_g.div(data["1_71_4"],data["1_69_4"] );
}
_g.calc1_73_19 = function(){
var tmp = [];
	tmp[0]=0;
	if( ((_g.num(data["1_70_19"])) > (_g.num(data["1_72_19"]))) ){
		tmp[0]=data["1_72_19"];
	}else{
		tmp[0]=data["1_70_19"];
	}
	tmp[1]=0;
	if( ((_g.num(data["1_70_19"])) < (_g.num(data["1_71_19"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=tmp[0];
	}
	tmp[2]=_g.IFERROR(tmp[1],"");
	data["1_73_19"]=tmp[2];
}
_g.calc1_74_4 = function(){
	data["1_74_4"]=_g.div(data["1_72_4"],data["1_69_4"] );
}
_g.calc1_74_19 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.ISNUMBER(data["1_17_3"])) &&  (_g.ISNUMBER(data["1_73_19"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num((_g.sub(data["1_72_19"],data["1_17_3"] )))) < (_g.num(data["1_71_19"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=_g.sub(data["1_72_19"],data["1_17_3"] );
	}
	tmp[2]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_73_19"] )))) < (_g.num(data["1_72_19"]))) ){
		tmp[2]=data["1_73_19"];
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=tmp[2];
	}else{
		tmp[3]="";
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_74_19"]=tmp[4];
}
_g.calc1_75_19 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.ISNUMBER(data["1_17_3"])) &&  (_g.ISNUMBER(data["1_73_19"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num((_g.sub(data["1_72_19"],data["1_17_3"] )))) < (_g.num(data["1_71_19"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=_g.sub(data["1_72_19"],data["1_17_3"] );
	}
	tmp[2]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_73_19"] )))) < (_g.num(data["1_72_19"]))) ){
		tmp[2]=data["1_73_19"];
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=tmp[2];
	}else{
		tmp[3]="";
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_75_19"]=tmp[4];
}
_g.calc1_76_19 = function(){
var tmp = [];
	tmp[0]=false;
	if( (_g.ISNUMBER(data["1_17_3"])) &&  (_g.ISNUMBER(data["1_73_19"]))	)tmp[0]=true; 
	tmp[1]=0;
	if( ((_g.num((_g.sub(data["1_72_19"],data["1_17_3"] )))) < (_g.num(data["1_71_19"]))) ){
		tmp[1]="LA < min tickt size";
	}else{
		tmp[1]=_g.sub(data["1_72_19"],data["1_17_3"] );
	}
	tmp[2]=0;
	if( ((_g.num((_g.add(data["1_17_3"],data["1_73_19"] )))) < (_g.num(data["1_72_19"]))) ){
		tmp[2]=data["1_73_19"];
	}else{
		tmp[2]=tmp[1];
	}
	tmp[3]=0;
	if( (tmp[0]) ){
		tmp[3]=tmp[2];
	}else{
		tmp[3]="Not a num";
	}
	tmp[4]=_g.IFERROR(tmp[3],"");
	data["1_76_19"]=tmp[4];
}
_g.calc1_79_29 = function(){
var tmp = [];
	tmp[0]=0;
	if( (_g.equal(data["1_6_25"],"Toxic")) ){
		tmp[0]=35;
	}else{
		tmp[0]=75;
	}
	data["1_79_29"]=tmp[0];
}
_g.calc2_5_1 = function(){
	data["2_5_1"]=_g.add(_g.add(_g.add(data["2_1_1"],data["2_2_1"] ),data["2_4_1"] ),data["2_3_1"] );
}
_g.calc2_8_1 = function(){
	data["2_8_1"]=_g.add(_g.add(data["2_5_1"],data["2_6_1"] ),data["2_7_1"] );
}
_g.calc2_10_1 = function(){
	data["2_10_1"]=data["1_24_3"];
}
_g.calc2_11_1 = function(){
var tmp = [];
	tmp[0]=_g.IFERROR(_g.div(data["2_8_1"],data["2_10_1"] ),0);
	data["2_11_1"]=tmp[0];
}
var SSF={};var make_ssf=function(t){function n(e){var t="",n=e.length-1;while(n>=0)t+=e.charAt(n--);return t}function r(e,t){var n="";while(n.length<t)n+=e;return n}function i(e,t){var n=""+e;return n.length>=t?n:r("0",t-n.length)+n}function s(e,t){var n=""+e;return n.length>=t?n:r(" ",t-n.length)+n}function o(e,t){var n=""+e;return n.length>=t?n:n+r(" ",t-n.length)}function u(e,t){var n=""+Math.round(e);return n.length>=t?n:r("0",t-n.length)+n}function a(e,t){var n=""+e;return n.length>=t?n:r("0",t-n.length)+n}function l(e,t){if(e>f||e<-f)return u(e,t);var n=Math.round(e);return a(n,t)}function c(e,t){return e.length>=7+t&&(e.charCodeAt(t)|32)===103&&(e.charCodeAt(t+1)|32)===101&&(e.charCodeAt(t+2)|32)===110&&(e.charCodeAt(t+3)|32)===101&&(e.charCodeAt(t+4)|32)===114&&(e.charCodeAt(t+5)|32)===97&&(e.charCodeAt(t+6)|32)===108}function p(e){for(var t=0;t!=h.length;++t)if(e[h[t][0]]===undefined)e[h[t][0]]=h[t][1]}function g(e,t,n){var r=e<0?-1:1;var i=e*r;var s=0,o=1,u=0;var a=1,f=0,l=0;var c=Math.floor(i);while(f<t){c=Math.floor(i);u=c*o+s;l=c*f+a;if(i-c<5e-10)break;i=1/(i-c);s=o;o=u;a=f;f=l}if(l>t){l=f;u=o}if(l>t){l=a;u=s}if(!n)return[0,r*u,l];if(l===0)throw"Unexpected state: "+u+" "+o+" "+s+" "+l+" "+f+" "+a;var h=Math.floor(r*u/l);return[h,r*u-h*l,l]}function y(e,t){return""+e}function w(e,t){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?y(e,t):b(e,t)}throw new Error("unsupported value in General format: "+e)}function E(e,t){return 0}function S(e,t,n){if(e>2958465||e<0)return null;var r=e|0,i=Math.floor(86400*(e-r)),s=0;var o=[];var u={D:r,T:i,u:86400*(e-r)-i,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(u.u)<1e-6)u.u=0;p(t!=null?t:t=[]);if(t.date1904)r+=1462;if(u.u>.999){u.u=0;if(++i==86400){i=0;++r}}if(r===60){o=n?[1317,10,29]:[1900,2,29];s=3}else if(r===0){o=n?[1317,8,29]:[1900,1,0];s=6}else{if(r>60)--r;var a=new Date(1900,0,1);a.setDate(a.getDate()+r-1);o=[a.getFullYear(),a.getMonth()+1,a.getDate()];s=a.getDay();if(r<60)s=(s+6)%7;if(n)s=E(a,o)}u.y=o[0];u.m=o[1];u.d=o[2];u.S=i%60;i=Math.floor(i/60);u.M=i%60;i=Math.floor(i/60);u.H=i;u.q=s;return u}function x(e,t,n,r){var s="",o=0,u=0,a=n.y,f,l=0;switch(e){case 98:a=n.y+543;case 121:switch(t.length){case 1:case 2:f=a%100;l=2;break;default:f=a%1e4;l=4;break}break;case 109:switch(t.length){case 1:case 2:f=n.m;l=t.length;break;case 3:return m[n.m-1][1];case 5:return m[n.m-1][0];default:return m[n.m-1][2]}break;case 100:switch(t.length){case 1:case 2:f=n.d;l=t.length;break;case 3:return v[n.q][0];default:return v[n.q][1]}break;case 104:switch(t.length){case 1:case 2:f=1+(n.H+11)%12;l=t.length;break;default:throw"bad hour format: "+t}break;case 72:switch(t.length){case 1:case 2:f=n.H;l=t.length;break;default:throw"bad hour format: "+t}break;case 77:switch(t.length){case 1:case 2:f=n.M;l=t.length;break;default:throw"bad minute format: "+t}break;case 115:if(n.u===0)switch(t){case"s":case"ss":return i(n.S,t.length);case".0":case".00":case".000":}switch(t){case"s":case"ss":case".0":case".00":case".000":if(r>=2)u=r===3?1e3:100;else u=r===1?10:1;o=Math.round(u*(n.S+n.u));if(o>=60*u)o=0;if(t==="s")return o===0?"0":""+o/u;s=i(o,2+r);if(t==="ss")return s.substr(0,2);return"."+s.substr(2,t.length-1);default:throw"bad second format: "+t};case 90:switch(t){case"[h]":case"[hh]":f=n.D*24+n.H;break;case"[m]":case"[mm]":f=(n.D*24+n.H)*60+n.M;break;case"[s]":case"[ss]":f=((n.D*24+n.H)*60+n.M)*60+Math.round(n.S+n.u);break;default:throw"bad abstime format: "+t}l=t.length===3?1:2;break;case 101:f=a;l=1}if(l>0)return i(f,l);else return""}function T(e){if(e.length<=3)return e;var t=e.length%3,n=e.substr(0,t);for(;t!=e.length;t+=3)n+=(n.length>0?",":"")+e.substr(t,3);return n}function C(e){var t=[];var n=false,r;for(var i=0,s=0;i<e.length;++i)switch(r=e.charCodeAt(i)){case 34:n=!n;break;case 95:case 42:case 92:++i;break;case 59:t[t.length]=e.substr(s,i-s);s=i+1}t[t.length]=e.substr(s);if(n===true)throw new Error("Format |"+e+"| unterminated string ");return t}function L(e,t,n,r,i){var s=[],o="",u=0,a="",f="t",l,h,p,d;var v="H";while(u<e.length){switch(a=e[u]){case"G":if(!c(e,u))throw new Error("unrecognized character "+a+" in "+e);s[s.length]={t:"G",v:"General"};u+=7;break;case'"':for(o="";(d=e.charCodeAt(++u))!==34&&u<e.length;)o+=String.fromCharCode(d);s[s.length]={t:"t",v:o};++u;break;case"\\":var m=e[++u],g=m==="("||m===")"?m:"t";s[s.length]={t:g,v:m};++u;break;case"_":s[s.length]={t:"t",v:" "};u+=2;break;case"@":s[s.length]={t:"T",v:t};++u;break;case"B":case"b":if(e[u+1]==="1"||e[u+1]==="2"){if(h==null){h=S(t,n,e[u+1]==="2");if(h==null)return""}s[s.length]={t:"X",v:e.substr(u,2)};f=a;u+=2;break};case"M":case"D":case"Y":case"H":case"S":case"E":a=a.toLowerCase();case"m":case"d":case"y":case"h":case"s":case"e":case"g":if(t<0)return"";if(h==null){h=S(t,n);if(h==null)return""}o=a;while(++u<e.length&&e[u].toLowerCase()===a)o+=a;if(a==="m"&&f.toLowerCase()==="h")a="M";if(a==="h")a=v;s[s.length]={t:a,v:o};f=a;break;case"A":l={t:a,v:"A"};if(h==null)h=S(t,n);if(e.substr(u,3)==="A/P"){if(h!=null)l.v=h.H>=12?"P":"A";l.t="T";v="h";u+=3}else if(e.substr(u,5)==="AM/PM"){if(h!=null)l.v=h.H>=12?"PM":"AM";l.t="T";u+=5;v="h"}else{l.t="t";++u}if(h==null&&l.t==="T")return"";s[s.length]=l;f=a;break;case"[":o=a;while(e[u++]!=="]"&&u<e.length)o+=e[u];if(o.substr(-1)!=="]")throw'unterminated "[" block: |'+o+"|";if(o.match(k)){if(h==null){h=S(t,n);if(h==null)return""}s[s.length]={t:"Z",v:o.toLowerCase()}}else{o=""}break;case".":if(i===true){s[s.length]={t:"t",v:a};++u;break}if(h!=null){o=a;while((a=e[++u])==="0")o+=a;s[s.length]={t:"s",v:o};break};case"0":case"#":o=a;while("0#?.,E+-%".indexOf(a=e[++u])>-1||a=="\\"&&e[u+1]=="-"&&"0#".indexOf(e[u+2])>-1)o+=a;s[s.length]={t:"n",v:o};break;case"?":o=a;while(e[++u]===a)o+=a;l={t:a,v:o};s[s.length]=l;f=a;break;case"*":++u;if(e[u]==" "||e[u]=="*")++u;break;case"(":case")":s[s.length]={t:r===1?"t":a,v:a};++u;break;case"1":case"2":case"3":case"4":case"5":case"6":case"7":case"8":case"9":o=a;while("0123456789".indexOf(e[++u])>-1)o+=e[u];s[s.length]={t:"D",v:o};break;case" ":s[s.length]={t:a,v:a};++u;break;default:if(",$-+/():!^&'~{}<>=â‚¬acfijklopqrtuvwxz".indexOf(a)===-1)throw new Error("unrecognized character "+a+" in "+e);s[s.length]={t:"t",v:a};++u;break}}var y=0,b=0,E;for(u=s.length-1,f="t";u>=0;--u){switch(s[u].t){case"h":case"H":s[u].t=v;f="h";if(y<1)y=1;break;case"s":if(E=s[u].v.match(/\.0+$/))b=Math.max(b,E[0].length-1);if(y<3)y=3;case"d":case"y":case"M":case"e":f=s[u].t;break;case"m":if(f==="s"){s[u].t="M";if(y<2)y=2}break;case"X":if(s[u].v==="B2");break;case"Z":if(y<1&&s[u].v.match(/[Hh]/))y=1;if(y<2&&s[u].v.match(/[Mm]/))y=2;if(y<3&&s[u].v.match(/[Ss]/))y=3}}switch(y){case 0:break;case 1:if(h.u>=.5){h.u=0;++h.S}if(h.S>=60){h.S=0;++h.M}if(h.M>=60){h.M=0;++h.H}break;case 2:if(h.u>=.5){h.u=0;++h.S}if(h.S>=60){h.S=0;++h.M}break}var T="",C;for(u=0;u<s.length;++u){switch(s[u].t){case"t":case"T":case" ":case"D":break;case"X":s[u]=undefined;break;case"d":case"m":case"y":case"h":case"H":case"M":case"s":case"e":case"b":case"Z":s[u].v=x(s[u].t.charCodeAt(0),s[u].v,h,b);s[u].t="t";break;case"n":case"(":case"?":C=u+1;while(s[C]!=null&&((a=s[C].t)==="?"||a==="D"||(a===" "||a==="t")&&s[C+1]!=null&&(s[C+1].t==="?"||s[C+1].t==="t"&&s[C+1].v==="/")||s[u].t==="("&&(a===" "||a==="n"||a===")")||a==="t"&&(s[C].v==="/"||"$â‚¬".indexOf(s[C].v)>-1||s[C].v===" "&&s[C+1]!=null&&s[C+1].t=="?"))){s[u].v+=s[C].v;s[C]=undefined;++C}T+=s[u].v;u=C-1;break;case"G":s[u].t="t";s[u].v=w(t,n);break}}var L="",A,O;if(T.length>0){A=t<0&&T.charCodeAt(0)===45?-t:t;O=N(T.charCodeAt(0)===40?"(":"n",T,A);C=O.length-1;var M=s.length;for(u=0;u<s.length;++u)if(s[u]!=null&&s[u].v.indexOf(".")>-1){M=u;break}var _=s.length;if(M===s.length&&O.indexOf("E")===-1){for(u=s.length-1;u>=0;--u){if(s[u]==null||"n?(".indexOf(s[u].t)===-1)continue;if(C>=s[u].v.length-1){C-=s[u].v.length;s[u].v=O.substr(C+1,s[u].v.length)}else if(C<0)s[u].v="";else{s[u].v=O.substr(0,C+1);C=-1}s[u].t="t";_=u}if(C>=0&&_<s.length)s[_].v=O.substr(0,C+1)+s[_].v}else if(M!==s.length&&O.indexOf("E")===-1){C=O.indexOf(".")-1;for(u=M;u>=0;--u){if(s[u]==null||"n?(".indexOf(s[u].t)===-1)continue;p=s[u].v.indexOf(".")>-1&&u===M?s[u].v.indexOf(".")-1:s[u].v.length-1;L=s[u].v.substr(p+1);for(;p>=0;--p){if(C>=0&&(s[u].v[p]==="0"||s[u].v[p]==="#"))L=O[C--]+L}s[u].v=L;s[u].t="t";_=u}if(C>=0&&_<s.length)s[_].v=O.substr(0,C+1)+s[_].v;C=O.indexOf(".")+1;for(u=M;u<s.length;++u){if(s[u]==null||"n?(".indexOf(s[u].t)===-1&&u!==M)continue;p=s[u].v.indexOf(".")>-1&&u===M?s[u].v.indexOf(".")+1:0;L=s[u].v.substr(0,p);for(;p<s[u].v.length;++p){if(C<O.length)L+=O[C++]}s[u].v=L;s[u].t="t";_=u}}}for(u=0;u<s.length;++u)if(s[u]!=null&&"n(?".indexOf(s[u].t)>-1){A=r>1&&t<0&&u>0&&s[u-1].v==="-"?-t:t;s[u].v=N(s[u].t,s[u].v,A);s[u].t="t"}var D="";for(u=0;u!==s.length;++u)if(s[u]!=null)D+=s[u].v;return D}function M(e,t){if(t==null)return false;var n=parseFloat(t[2]);switch(t[1]){case"=":if(e==n)return true;break;case">":if(e>n)return true;break;case"<":if(e<n)return true;break;case"<>":if(e!=n)return true;break;case">=":if(e>=n)return true;break;case"<=":if(e<=n)return true;break}return false}function _(e,t){var n=C(e);var r=n.length,i=n[r-1].indexOf("@");if(r<4&&i>-1)--r;if(n.length>4)throw"cannot find right format for |"+n+"|";if(typeof t!=="number")return[4,n.length===4||i>-1?n[n.length-1]:"@"];switch(n.length){case 1:n=i>-1?["General","General","General",n[0]]:[n[0],n[0],n[0],"@"];break;case 2:n=i>-1?[n[0],n[0],n[0],n[1]]:[n[0],n[1],n[0],"@"];break;case 3:n=i>-1?[n[0],n[1],n[0],n[2]]:[n[0],n[1],n[2],"@"];break;case 4:break}var s=t>0?n[0]:t<0?n[1]:n[2];if(n[0].indexOf("[")===-1&&n[1].indexOf("[")===-1)return[r,s];if(n[0].match(A)!=null||n[1].match(A)!=null){var o=n[0].match(O);var u=n[1].match(O);return M(t,o)?[r,n[0]]:M(t,u)?[r,n[1]]:[r,n[o!=null&&u!=null?2:1]]}return[r,s]}function D(e,t,n,r){p(n!=null?n:n=[]);var i="";switch(typeof e){case"string":i=e;break;case"number":i=(n.table!=null?n.table:d)[e];break}if(c(i,0))return w(t,n);var s=_(i,t);if(c(s[1]))return w(t,n);if(t===true)t="TRUE";else if(t===false)t="FALSE";else if(t===""||t==null)return"";return L(s[1],t,n,s[0],r)}t.version="0.8.1";var f=Math.pow(2,32);var h=[["date1904",0],["output",""],["WTF",false]];t.opts=h;var d={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"ä¸Šå?ˆ/ä¸‹å?ˆ "hh"æ™‚"mm"åˆ†"ss"ç§’ "',65535:"General"};var v=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]];var m=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];t._general_int=y;var b=function(){function o(e){var t=e<0?12:11;var n=f(e.toFixed(12));if(n.length<=t)return n;n=e.toPrecision(10);if(n.length<=t)return n;return e.toExponential(5)}function u(e){var n=e.toFixed(11).replace(t,".$1");if(n.length>(e<0?12:11))n=e.toPrecision(6);return n}function a(e){for(var t=0;t!=e.length;++t)if((e.charCodeAt(t)|32)===101)return e.replace(r,".$1").replace(i,"E").replace("e","E").replace(s,"$10$2");return e}function f(e){return e.indexOf(".")>-1?e.replace(n,"").replace(t,".$1"):e}var t=/\.(\d*[1-9])0+$/,n=/\.0*$/,r=/\.(\d*[1-9])0+/,i=/\.0*[Ee]/,s=/(E[+-])(\d)$/;return function(t,n){var r=Math.floor(Math.log(Math.abs(t))*Math.LOG10E),i;if(r>=-4&&r<=-1)i=t.toPrecision(10+r);else if(Math.abs(r)<=9)i=o(t);else if(r===10)i=t.toFixed(10).substr(0,12);else i=u(t);return f(a(i))}}();t._general_num=b;t._general=w;t.parse_date_code=S;var N=function(){function u(e,n,i){var s=n.replace(t,""),o=n.length-s.length;return N(e,s,i*Math.pow(10,2*o))+r("%",o)}function a(e,t,n){var r=t.length-1;while(t.charCodeAt(r-1)===44)--r;return N(e,t.substr(0,r),n/Math.pow(10,3*(t.length-r)))}function f(e,t){var n;var r=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){var i=e.indexOf(".");if(i===-1)i=e.indexOf("E");var s=Math.floor(Math.log(Math.abs(t))*Math.LOG10E)%i;if(s<0)s+=i;n=(t/Math.pow(10,s)).toPrecision(r+1+(i+s)%i);if(n.indexOf("e")===-1){var o=Math.floor(Math.log(Math.abs(t))*Math.LOG10E);if(n.indexOf(".")===-1)n=n[0]+"."+n.substr(1)+"E+"+(o-n.length+s);else n+="E+"+(o-s);while(n.substr(0,2)==="0."){n=n[0]+n.substr(2,i)+"."+n.substr(2+i);n=n.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.")}n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,n,r){return t+n+r.substr(0,(i+s)%i)+"."+r.substr(s)+"E"})}else n=t.toExponential(r);if(e.match(/E\+00$/)&&n.match(/e[+-]\d$/))n=n.substr(0,n.length-1)+"0"+n[n.length-1];if(e.match(/E\-/)&&n.match(/e\+/))n=n.replace(/e\+/,"e");return n.replace("e","E")}function h(e,t,n){var o=parseInt(e[4]),u=Math.round(t*o),a=Math.floor(u/o);var f=u-a*o,l=o;return n+(a===0?"":""+a)+" "+(f===0?r(" ",e[1].length+1+e[4].length):s(f,e[1].length)+e[2]+"/"+e[3]+i(l,e[4].length))}function p(e,t,n){return n+(t===0?"":""+t)+r(" ",e[1].length+2+e[4].length)}function y(e){var t="",n;for(var r=0;r!=e.length;++r)switch(n=e.charCodeAt(r)){case 35:break;case 63:t+=" ";break;case 48:t+="0";break;default:t+=String.fromCharCode(n)}return t}function b(e,t){var n=Math.pow(10,t);return""+Math.round(e*n)/n}function w(e,t){return Math.round((e-Math.floor(e))*Math.pow(10,t))}function E(e){if(e<2147483647&&e>-2147483648)return""+(e>=0?e|0:e-1|0);return""+Math.floor(e)}function S(e,t,p){if(e.charCodeAt(0)===40&&!t.match(v)){var x=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(p>=0)return S("n",x,p);return"("+S("n",x,-p)+")"}if(t.charCodeAt(t.length-1)===44)return a(e,t,p);if(t.indexOf("%")!==-1)return u(e,t,p);if(t.indexOf("E")!==-1)return f(t,p);if(t.charCodeAt(0)===36)return"$"+S(e,t.substr(t[1]==" "?2:1),p);var C,k;var L,A,O,M=Math.abs(p),_=p<0?"-":"";if(t.match(/^00+$/))return _+l(M,t.length);if(t.match(/^[#?]+$/)){C=l(p,0);if(C==="0")C="";return C.length>t.length?C:y(t.substr(0,t.length-C.length))+C}if((L=t.match(c))!==null)return h(L,M,_);if(t.match(/^#+0+$/)!==null)return _+l(M,t.length-t.indexOf("0"));if((L=t.match(d))!==null){C=b(p,L[1].length).replace(/^([^\.]+)$/,"$1."+L[1]).replace(/\.$/,"."+L[1]).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",L[1].length-t.length)});return t.indexOf("0.")!==-1?C:C.replace(/^0\./,".")}t=t.replace(/^#+([0.])/,"$1");if((L=t.match(/^(0*)\.(#*)$/))!==null){return _+b(M,L[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,L[1].length?"0.":".")}if((L=t.match(/^#,##0(\.?)$/))!==null)return _+T(l(M,0));if((L=t.match(/^#,##0\.([#0]*0)$/))!==null){return p<0?"-"+S(e,t,-p):T(""+Math.floor(p))+"."+i(w(p,L[1].length),L[1].length)}if((L=t.match(/^#,#*,#0/))!==null)return S(e,t.replace(/^#,#*,/,""),p);if((L=t.match(/^([0#]+)(\\?-([0#]+))+$/))!==null){C=n(S(e,t.replace(/[\\-]/g,""),p));A=0;return n(n(t.replace(/\\/g,"")).replace(/[0#]/g,function(e){return A<C.length?C[A++]:e==="0"?"0":""}))}if(t.match(m)!==null){C=S(e,"##########",p);return"("+C.substr(0,3)+") "+C.substr(3,3)+"-"+C.substr(6)}var D="";if((L=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){A=Math.min(L[4].length,7);O=g(M,Math.pow(10,A)-1,false);C=""+_;D=N("n",L[1],O[1]);if(D[D.length-1]==" ")D=D.substr(0,D.length-1)+"0";C+=D+L[2]+"/"+L[3];D=o(O[2],A);if(D.length<L[4].length)D=y(L[4].substr(L[4].length-D.length))+D;C+=D;return C}if((L=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){A=Math.min(Math.max(L[1].length,L[4].length),7);O=g(M,Math.pow(10,A)-1,true);return _+(O[0]||(O[1]?"":"0"))+" "+(O[1]?s(O[1],A)+L[2]+"/"+L[3]+o(O[2],A):r(" ",2*A+1+L[2].length+L[3].length))}if((L=t.match(/^[#0?]+$/))!==null){C=l(p,0);if(t.length<=C.length)return C;return y(t.substr(0,t.length-C.length))+C}if((L=t.match(/^([#0?]+)\.([#0]+)$/))!==null){C=""+p.toFixed(Math.min(L[2].length,10)).replace(/([^0])0+$/,"$1");A=C.indexOf(".");var P=t.indexOf(".")-A,H=t.length-C.length-P;return y(t.substr(0,P)+C+t.substr(t.length-H))}if((L=t.match(/^00,000\.([#0]*0)$/))!==null){A=w(p,L[1].length);return p<0?"-"+S(e,t,-p):T(E(p)).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?i(0,3-e.length):"")+e})+"."+i(A,L[1].length)}switch(t){case"#,###":var B=T(l(M,0));return B!=="0"?_+B:"";default:}throw new Error("unsupported format |"+t+"|")}function x(e,t,n){var r=t.length-1;while(t.charCodeAt(r-1)===44)--r;return N(e,t.substr(0,r),n/Math.pow(10,3*(t.length-r)))}function C(e,n,i){var s=n.replace(t,""),o=n.length-s.length;return N(e,s,i*Math.pow(10,2*o))+r("%",o)}function k(e,t){var n;var r=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){var i=e.indexOf(".");if(i===-1)i=e.indexOf("E");var s=Math.floor(Math.log(Math.abs(t))*Math.LOG10E)%i;if(s<0)s+=i;n=(t/Math.pow(10,s)).toPrecision(r+1+(i+s)%i);if(!n.match(/[Ee]/)){var o=Math.floor(Math.log(Math.abs(t))*Math.LOG10E);if(n.indexOf(".")===-1)n=n[0]+"."+n.substr(1)+"E+"+(o-n.length+s);else n+="E+"+(o-s);n=n.replace(/\+-/,"-")}n=n.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(e,t,n,r){return t+n+r.substr(0,(i+s)%i)+"."+r.substr(s)+"E"})}else n=t.toExponential(r);if(e.match(/E\+00$/)&&n.match(/e[+-]\d$/))n=n.substr(0,n.length-1)+"0"+n[n.length-1];if(e.match(/E\-/)&&n.match(/e\+/))n=n.replace(/e\+/,"e");return n.replace("e","E")}function L(e,t,u){if(e.charCodeAt(0)===40&&!t.match(v)){var a=t.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");if(u>=0)return L("n",a,u);return"("+L("n",a,-u)+")"}if(t.charCodeAt(t.length-1)===44)return x(e,t,u);if(t.indexOf("%")!==-1)return C(e,t,u);if(t.indexOf("E")!==-1)return k(t,u);if(t.charCodeAt(0)===36)return"$"+L(e,t.substr(t[1]==" "?2:1),u);var f;var l,h,b,w=Math.abs(u),E=u<0?"-":"";if(t.match(/^00+$/))return E+i(w,t.length);if(t.match(/^[#?]+$/)){f=""+u;if(u===0)f="";return f.length>t.length?f:y(t.substr(0,t.length-f.length))+f}if((l=t.match(c))!==null)return p(l,w,E);if(t.match(/^#+0+$/)!==null)return E+i(w,t.length-t.indexOf("0"));if((l=t.match(d))!==null){f=(""+u).replace(/^([^\.]+)$/,"$1."+l[1]).replace(/\.$/,"."+l[1]).replace(/\.(\d*)$/,function(e,t){return"."+t+r("0",l[1].length-t.length)});return t.indexOf("0.")!==-1?f:f.replace(/^0\./,".")}t=t.replace(/^#+([0.])/,"$1");if((l=t.match(/^(0*)\.(#*)$/))!==null){return E+(""+w).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,l[1].length?"0.":".")}if((l=t.match(/^#,##0(\.?)$/))!==null)return E+T(""+w);if((l=t.match(/^#,##0\.([#0]*0)$/))!==null){return u<0?"-"+L(e,t,-u):T(""+u)+"."+r("0",l[1].length)}if((l=t.match(/^#,#*,#0/))!==null)return L(e,t.replace(/^#,#*,/,""),u);if((l=t.match(/^([0#]+)(\\?-([0#]+))+$/))!==null){f=n(L(e,t.replace(/[\\-]/g,""),u));h=0;return n(n(t.replace(/\\/g,"")).replace(/[0#]/g,function(e){return h<f.length?f[h++]:e==="0"?"0":""}))}if(t.match(m)!==null){f=L(e,"##########",u);return"("+f.substr(0,3)+") "+f.substr(3,3)+"-"+f.substr(6)}var S="";if((l=t.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){h=Math.min(l[4].length,7);b=g(w,Math.pow(10,h)-1,false);f=""+E;S=N("n",l[1],b[1]);if(S[S.length-1]==" ")S=S.substr(0,S.length-1)+"0";f+=S+l[2]+"/"+l[3];S=o(b[2],h);if(S.length<l[4].length)S=y(l[4].substr(l[4].length-S.length))+S;f+=S;return f}if((l=t.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))!==null){h=Math.min(Math.max(l[1].length,l[4].length),7);b=g(w,Math.pow(10,h)-1,true);return E+(b[0]||(b[1]?"":"0"))+" "+(b[1]?s(b[1],h)+l[2]+"/"+l[3]+o(b[2],h):r(" ",2*h+1+l[2].length+l[3].length))}if((l=t.match(/^[#0?]+$/))!==null){f=""+u;if(t.length<=f.length)return f;return y(t.substr(0,t.length-f.length))+f}if((l=t.match(/^([#0]+)\.([#0]+)$/))!==null){f=""+u.toFixed(Math.min(l[2].length,10)).replace(/([^0])0+$/,"$1");h=f.indexOf(".");var A=t.indexOf(".")-h,O=t.length-f.length-A;return y(t.substr(0,A)+f+t.substr(t.length-O))}if((l=t.match(/^00,000\.([#0]*0)$/))!==null){return u<0?"-"+L(e,t,-u):T(""+u).replace(/^\d,\d{3}$/,"0$&").replace(/^\d*$/,function(e){return"00,"+(e.length<3?i(0,3-e.length):"")+e})+"."+i(0,l[1].length)}switch(t){case"#,###":var M=T(""+w);return M!=="0"?E+M:"";default:}throw new Error("unsupported format |"+t+"|")}var t=/%/g;var c=/# (\?+)( ?)\/( ?)(\d+)/;var d=/^#*0*\.(0+)/;var v=/\).*[0#]/;var m=/\(###\) ###\\?-####/;return function(t,n,r){return(r|0)===r?L(t,n,r):S(t,n,r)}}();t._split=C;var k=/\[[HhMmSs]*\]/;t._eval=L;var A=/\[[=<>]/;var O=/\[([=<>]*)(-?\d+\.?\d*)\]/;t._table=d;t.load=function(t,n){d[n]=t};t.format=D;t.get_table=function(){return d};t.load_table=function(n){for(var r=0;r!=392;++r)if(n[r]!==undefined)t.load(n[r],r)}};make_ssf(SSF)
